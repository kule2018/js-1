/*
	源码作者: 石不易(Louis Shi)
	联系方式: http://www.shibuyi.net
	===================================================================================================
	程序名称: JavaScript 封装库 BETA 5.0 版
	迭代版本: BETA 4.0
	插件总数: 23 个
	库方法数: 31 个
	主方法数: 60 个
	方法总数: 114 个
	新增插件: 11 个
	新增库方法: 5 个
	新增主方法: 31 个
	新增总数: 47 个
	删除插件: 0 个
	删除库方法: 3 个
	删除主方法: 0 个
	删除总数: 3 个
	追加功能:
		1. 更多的元素获取与输出方式, 包括: 首位子元素、末位子元素、全部子元素、父级元素、索引元素等等, 均包含两种模式, 分别为内部获取与外部输出。
		2. 新增表单元素与其表单子元素的获取与操作。
		3. 库方法: 新增贴靠数据检测, 分别针对左右两边贴靠进行数据容错处理。
		4. 库方法: 新增对滚动条宽度的获取, 包括: x轴与y轴两种。
		5. 插件: 新增贴靠功能, 包含: 左贴靠与右贴靠两种模式。
		6. 插件: 新增表单数据处理, 包括: 提交表单、重置表单、表单聚焦、表单失焦、禁止复制剪切与粘贴等等。
		...
	优化功能:
		1. 元素选择器重新添加了对 name 元素的获取, 并且兼容 IE 6/7/8, 方便对表单元素的获取。
		2. CSS 样式设置更加方便, 对于多个样式无需再特定为数组或者单个样式在分为两个形参, 全部统一为形参, 比如: “font-size” 没有加“:”号或者“=”号则为获取, 加上则为设置。
		3. “新增元素”与“移除元素”从库方法转变成为主方法, 调用设置更加简单方便, 且新增了移动(剪切)与复制元素功能。
		4. 获取与设置窗口滚动条从库方法转变为主方法, 调用时可直接与其他主方法连缀, 使用起来更加方便。
		5. 插件: “遮罩锁屏”功能内嵌了动画功能与其他繁琐的连缀方法, 全部内置后极大的简化了外部的调用设置过程, 操作更加容易, 且分为滚动锁屏与固定锁屏两种模式。
		6. 插件: “元素拖拽”功能内嵌了禁止溢出功能, 极简化了外部的调用设置步骤, 使用更加方便。
		...
	删除功能:
		1. 库方法: 删除了“获取目标节点”。
		2. 库方法: 删除了“新增元素”。
		3. 库方法: 删除了“移除元素”。
*/

(function () {

	// 实例化基础库
	$ = function () {
		// 获取定位器
		var positionerList = $.format(arguments);
		return positionerList.length != 0 ? new Base(positionerList) : new Base();
	};

	// 基础库构造方法
	var Base = function (positionerList) {
		this.info = '无节点';
		this.elements = [];
		if (positionerList instanceof Array) {
			var nodes = [];
			for (var i in positionerList) {
				switch (typeof positionerList[i]) {
					case 'string' : // 元素节点选择器
						nodes = $().selector(positionerList[i]).getNodes();
						if (nodes != this.info) {
							if (nodes instanceof Array) { // 集群
								for (var j in nodes) {
									this.elements.push(nodes[j]);
								}
							} else { // 单一
								this.elements.push(nodes);
							}
						}
						break;
					case 'function' : // HTML DOM 加载
						this.loaded(positionerList[i]);
						break;
					default : // 直接获取节点
						if (positionerList[i] === window || $.checkNode(positionerList[i])) this.elements.push(positionerList[i]);
				}
			}
		}
	};

	// 元素定位选择器
	// 备注: 解决连续定位 "#box p span em.red" 的关键在 this.elements[i] 每次需要循环迭代改变其内部值
	Base.prototype.selector = function (positioner) {
		// 容错处理
		if (typeof positioner != 'string') {
			this.elements = [];
			return this;
		}
		// 初始化元素节点
		if (this.elements.length == 0) this.elements.push(document);
		var elements = [], nodes = [];
		positioner = $.trim(positioner).split(/[\s　]+/);
		for (var i in positioner) {
			switch (positioner[i].charAt(0)) {
				case '#' : // id
					positioner[i] = positioner[i].substring(1);
					for (var j in this.elements) {
						nodes = $().getId(positioner[i], this.elements[j]).getNodes();
						if (nodes != this.info) {
							elements.push(nodes);
							break;
						}
					}
					this.elements = elements;
					elements = [];
					break;
				case '.' : // class
					positioner[i]  = positioner[i].substring(1);
					for (var j in this.elements) {
						nodes = $().getClass(positioner[i], this.elements[j]).getNodes();
						if (nodes != this.info) {
							if (nodes instanceof Array) { // 集群
								for (var k in nodes) {
									elements.push(nodes[k]);
								}
							} else { // 单一
								elements.push(nodes);
							}
						}
					}
					this.elements = elements;
					elements = [];
					break;
				case '@' : // name
					positioner[i] = positioner[i].substring(1);
					for (var j in this.elements) {
						nodes = $().getName(positioner[i], this.elements[j]).getNodes();
						if (nodes != this.info) {
							if (nodes instanceof Array) { // 集群
								for (var k in nodes) {
									elements.push(nodes[k]);
								}
							} else { // 单一
								elements.push(nodes);
							}
						}
					}
					this.elements = elements;
					elements = [];
					break;
				default : // tagName
					var patternId = /^([a-z]+)#([\w\-]+)$/i, patternClass = /^([a-z]+)\.([\w\-]+)$/i, patternName = /^([a-z]+)@([\w\-]+)$/i;
					var tagName = null, id = '', className = '', name = '';
					if (patternId.test(positioner[i])) { // tagName + id
						tagName = patternId.exec(positioner[i])[1];
						id = patternId.exec(positioner[i])[2];
						for (var j in this.elements) {
							nodes = $().getTagName(tagName, this.elements[j]).getNodes();
							if (nodes != this.info) {
								if (nodes instanceof Array) { // 集群
									if (nodes[i].id == id) {
										elements.push(nodes[i]);
										break;
									}
								} else { // 单一
									if (nodes.id == id) elements.push(nodes);
								}
							}
						}
						this.elements = elements;
						elements = [];
					} else if (patternClass.test(positioner[i])) { // tagName + class
						tagName = patternClass.exec(positioner[i])[1];
						className = patternClass.exec(positioner[i])[2];
						for (var j in this.elements) {
							nodes = $().getTagName(tagName, this.elements[j]).getNodes();
							if (nodes != this.info) {
								if (nodes instanceof Array) { // 集群
									for (var k in nodes) {
										if ($.hasClass(className, nodes[k])) elements.push(nodes[k]);
									}
								} else { // 单一
									if ($.hasClass(className, nodes)) elements.push(nodes);
								}
							}
						}
						this.elements = elements;
						elements = [];
					} else if (patternName.test(positioner[i])) { // tagName + name
						tagName = patternName.exec(positioner[i])[1];
						name = patternName.exec(positioner[i])[2];
						for (var j in this.elements) {
							nodes = $().getTagName(tagName, this.elements[j]).getNodes();
							if (nodes != this.info) {
								if (nodes instanceof Array) { // 集群
									for (var k in nodes) {
										if (nodes[k].getAttribute('name') == name) elements.push(nodes[k]);
									}
								} else { // 单一
									if (nodes.getAttribute('name') == name) elements.push(nodes);
								}
							}
						}
						this.elements = elements;
						elements = [];
					} else { // tagName
						for (var j in this.elements) {
							nodes = $().getTagName(positioner[i], this.elements[j]).getNodes();
							if (nodes != this.info) {
								if (nodes instanceof Array) { // 集群
									for (var k in nodes) {
										elements.push(nodes[k]);
									}
								} else { // 单一
									elements.push(nodes);
								}
							}
						}
						this.elements = elements;
						elements = [];
					}
			}
			if (this.elements.length == 0) break;
		}
		return this;
	};

	// 获取 id 元素节点
	Base.prototype.getId = function (ids, positioner) {
		// 1. 检测是否多个id
		if (ids instanceof Array) { // 集群
			for (i in ids) this.getId(ids[i]);
		} else { // 单一
			// 2. 屏蔽重复的id
			for (var i in this.elements) if (this.elements[i].id == ids) return this;
			// 3. 获取元素定位器
			positioner = $.positioner(positioner);
			// 4. 检测定位器合法性
			if (positioner === false) return this;
			var elements = null;
			// 5. 检测是否多个定位器
			if (positioner instanceof Array) { // 集群
				for (var i in positioner) {
					if (typeof positioner[i].getElementsByTagName != 'undefined') {
						elements = positioner[i].getElementsByTagName('*');
						for (var j = 0; j < elements.length; j ++) {
							if (elements[j].id == ids) {
								this.elements.push(elements[j]);
								break;
							}
						}
					}
				}
			} else { // 单一
				if (typeof positioner.getElementsByTagName != 'undefined') {
					elements = positioner.getElementsByTagName('*');
					// 6. 遍历定位器获取id元素
					for (var i = 0; i < elements.length; i ++) {
						if (elements[i].id == ids) {
							this.elements.push(elements[i]);
							break;
						}
					}
				}
			}
		}
		return this;
	};

	// 获取 tag 元素节点
	Base.prototype.getTagName = function (tagName, positioner) {
		// 1. 获取元素定位器
		positioner = $.positioner(positioner);
		// 2. 检测元素定位器合法性
		if (positioner === false) return this;
		var elements = null;
		// 3. 检测元素定位器是否多个
		if (positioner instanceof Array) { // 集群
			for (var i in positioner) {
				if (typeof positioner[i].getElementsByTagName != 'undefined') {
					elements = positioner[i].getElementsByTagName(tagName);
					for (var j = 0; j < elements.length; j ++) {
						this.elements.push(elements[j]);
					}
				}
			}
		} else { // 单一
			if (typeof positioner.getElementsByTagName != 'undefined') {
				elements = positioner.getElementsByTagName(tagName);
				// 4. 遍历元素定位器
				for (var i = 0; i < elements.length; i ++) {
					// 5. 获取tag元素节点
					this.elements.push(elements[i]);
				}
			}
		}
		return this;
	};

	// 获取 class 元素节点
	Base.prototype.getClass = function (className, positioner) {
		// 1. 获取元素定位器
		positioner = $.positioner(positioner);
		// 2. 检测元素定位器合法性
		if (positioner === false) return this;
		var elements = null;
		// 3. 检测元素定位器是否多个
		if (positioner instanceof Array) { // 集群
			for (var i in positioner) {
				if (typeof positioner[i].getElementsByTagName != 'undefined') {
					elements = positioner[i].getElementsByTagName('*');
					for (var j = 0; j < elements.length; j ++) {
						if ($.hasClass(className, elements[j])) this.elements.push(elements[j]);
					}
				}
			}
		} else { // 单一
			if (typeof positioner.getElementsByTagName != 'undefined') {
				elements = positioner.getElementsByTagName('*');
				// 4. 遍历元素定位器
				for (var i = 0; i < elements.length; i ++) {
					// 5. 检测是否为class元素节点并获取
					if ($.hasClass(className, elements[i])) this.elements.push(elements[i]);
				}
			}
		}
		return this;
	};

	// 获取 name 元素节点
	Base.prototype.getName = function (name, positioner) {
		// 1. 获取元素定位器
		positioner = $.positioner(positioner);
		// 2. 检测元素定位器是否合法
		if (positioner === false) return this;
		var elements = null;
		// 3. 检测元素定位器是否多个
		if (positioner instanceof Array) { // 集群
			for (var i in positioner) {
				if (typeof positioner[i].getElementsByTagName != 'undefined') {
					elements = positioner[i].getElementsByTagName('*');
					for (var j = 0; j < elements.length; j ++) {
						if (elements[j].getAttribute('name') == name) this.elements.push(elements[j]);
					}
				}
			}
		} else { // 单一
			if (typeof positioner.getElementsByTagName != 'undefined') {
				elements = positioner.getElementsByTagName('*');
				// 4. 遍历元素定位器
				for (var i = 0; i < elements.length; i ++) {
					// 5. 检测是否name元素节点并获取
					if (elements[i].getAttribute('name') == name) this.elements.push(elements[i]);
				}
			}
		}
		return this;
	};

	// 输出所有元素节点
	Base.prototype.getNodes = function () {
		switch(this.elements.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return this.elements[0];
				break;
			default :
				return this.elements;
		}
	};

	// 获取首位元素节点
	Base.prototype.firstNode = function () {
		var elements = [];
		if (this.elements != 0) elements.push(this.elements[0]);
		this.elements = elements;
		return this;
	};

	// 输出首位元素节点
	Base.prototype.getFirstNode = function () {
		if (this.elements.length == 0) return this.info;
		return this.elements[0];
	};

	// 获取末位元素节点
	Base.prototype.lastNode = function () {
		var elements = [];
		if (this.elements.length != 0) elements.push(this.elements[this.elements.length - 1]);
		this.elements = elements;
		return this;
	};

	// 输出末位元素节点
	Base.prototype.getLastNode = function () {
		if (this.elements.length == 0) return this.info;
		return this.elements[this.elements.length - 1];
	};

	// 获取索引元素节点
	Base.prototype.indexNode = function (index) {
		var elements = [];
		index = $.number(index);
		if (typeof this.elements[index] != 'undefined') elements.push(this.elements[index]);
		this.elements = elements;
		return this;
	};

	// 输出索引元素节点
	Base.prototype.getIndexNode = function (index) {
		index = $.number(index);
		if (typeof this.elements[index] == 'undefined') return this.info;
		return this.elements[index];
	};

	// 获取首位子元素节点
	Base.prototype.firstChild = function () {
		var childs = [], length = this.elements.length - 1;
		for (var i =  length; i >= 0; i --) {
			// 1. 删除空白和注释元素节点
			$.clear(this.elements[i]);
			// 2. 获取所有子元素节点
			childs = $.getAllChild(this.elements[i]);
			// 3. 检测是否存在子元素节点
			if (childs === false) {
				// 4. 删除当前元素节点
				this.elements.splice(i, 1);
				continue;
			}
			// 5. 获取首位子元素节点
			this.elements.splice(i, 1, childs[0]);
		}
		return this;
	};

	// 输出首位子元素节点
	Base.prototype.getFirstChild = function () {
		var childs = [], firstChild = [];
		for (var i in this.elements) {
			$.clear(this.elements[i]);
			childs = $.getAllChild(this.elements[i]);
			if (childs === false) continue;
			firstChild.push(childs[0]);
		}
		switch (firstChild.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return firstChild[0];
				break;
			default :
				return firstChild;
		}
	};

	// 获取末位子元素节点
	Base.prototype.lastChild = function () {
		var childs = [], length = this.elements.length - 1;
		for (var i = length; i >= 0; i --) {
			// 1. 删除空白和注释元素节点
			$.clear(this.elements[i]);
			// 2. 获取所有子元素节点
			childs = $.getAllChild(this.elements[i]);
			// 3. 检测是否存在子元素节点
			if (childs === false) {
				// 4. 删除当前元素节点
				this.elements.splice(i, 1);
				continue;
			}
			// 5. 获取末位子元素节点
			this.elements.splice(i, 1, childs[childs.length - 1]);
		}
		return this;
	};

	// 输出末位子元素节点
	Base.prototype.getLastChild = function () {
		var childs = [], lastChild = [];
		for (var i in this.elements) {
			$.clear(this.elements[i]);
			childs = $.getAllChild(this.elements[i]);
			if (childs === false) continue;
			lastChild.push(childs[childs.length - 1]);
		}
		switch (lastChild.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return lastChild[0];
				break;
			default :
				return lastChild;
		}
	};

	// 获取所有子元素节点
	Base.prototype.allChild = function () {
		var childs = [], length = this.elements.length - 1;
		for (var i = length; i >= 0; i --) {
			$.clear(this.elements[i]);
			childs = $.getAllChild(this.elements[i]);
			this.elements.splice(i, 1);
			if (childs === false) continue;
			for (var j in childs) {
				this.elements.splice(i + j, 0, childs[j]);
			}
		}
		return this;
	};

	// 输出所有子元素节点
	Base.prototype.getAllChild = function () {
		var childs = [], childList = [];
		for (var i in this.elements) {
			$.clear(this.elements[i]);
			childs = $.getAllChild(this.elements[i]);
			if (childs === false) continue;
			for (var j in childs) {
				childList.push(childs[j]);
			}
		}
		switch (childList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return childList[0];
				break;
			default :
				return childList;
		}
	};

	// 获取父级元素节点
	Base.prototype.parentNode = function () {
		var length = this.elements.length - 1;
		for (var i = length; i >= 0; i --) {
			if (!$.checkNode(this.elements[i]) || this.elements[i].parentNode === null) {
				this.elements.splice(i, 1);
				continue;
			}
			this.elements.splice(i, 1, this.elements[i].parentNode);
		}
		return this;
	};

	// 输出父级元素节点
	Base.prototype.getParentNode = function () {
		var parentNode = [];
		for (var i in this.elements) {
			if (!$.checkNode(this.elements[i]) || this.elements[i].parentNode === null) continue;
			parentNode.push(this.elements[i].parentNode);
		}
		switch (parentNode.length) {
			case 0 :
				return this.info;
				break
			case 1 :
				return parentNode[0];
				break;
			default :
				return parentNode;
		}
	};

	// 获取前位兄弟节点
	Base.prototype.previousNode = function () {
		var length = this.elements.length - 1, previousNode = null;
		for (var i = length; i >= 0; i --) {
			previousNode = $.getPreviousNode(this.elements[i])
			if (!previousNode) {
				this.elements.splice(i, 1)
				continue;
			}
			this.elements.splice(i, 1, previousNode);
		}
		return this;
	};

	// 输出前位兄弟节点
	Base.prototype.getPreviousNode = function () {
		var previousNode = null, previousList = [];
		for (var i in this.elements) {
			previousNode = $.getPreviousNode(this.elements[i]);
			if (!!previousNode) previousList.push(previousNode);
		}
		switch (previousList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return previousList[0];
				break;
			default :
				return previousList;
		}
	};

	// 获取后位兄弟节点
	Base.prototype.nextNode = function () {
		var length = this.elements.length - 1, nextNode = null;
		for (var i = length; i >= 0; i --) {
			nextNode = $.getNextNode(this.elements[i]);
			if (!nextNode) {
				this.elements.splice(i, 1);
				continue;
			}
			this.elements.splice(i, 1, nextNode);
		}
		return this;
	};

	// 输出后位兄弟节点
	Base.prototype.getNextNode = function () {
		var nextNode = null, nextList = [];
		for (var i in this.elements) {
			nextNode = $.getNextNode(this.elements[i]);
			if (!!nextNode) nextList.push(nextNode);
		}
		switch (nextList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return nextList[0];
				break;
			default :
				return nextList;
		}
	};

	// 获取前后位兄弟节点
	Base.prototype.bothNode = function () {
		var length = this.elements.length - 1, previousNode = null, nextNode = null;
		for (var i = length; i >= 0; i --) {
			previousNode = $.getPreviousNode(this.elements[i]);
			nextNode = $.getNextNode(this.elements[i]);
			this.elements.splice(i, 1);
			if (!!previousNode && !!nextNode) {
				this.elements.splice(i, 0, previousNode, nextNode);
			} else if (!!previousNode) {
				this.elements.splice(i, 0, previousNode);
			} else if (!!nextNode) {
				this.elements.splice(i, 0, nextNode);
			}
		}
		return this;
	};

	// 输出前后位兄弟节点
	Base.prototype.getBothNode = function () {
		var previousNode = null, nextNode = null, bothList = [];
		for (var i in this.elements) {
			previousNode = $.getPreviousNode(this.elements[i]);
			nextNode = $.getNextNode(this.elements[i]);
			if (!!previousNode && !!nextNode) {
				bothList.push(previousNode, nextNode);
			} else if (!!previousNode) {
				bothList.push(previousNode);
			} else if (!!nextNode) {
				bothList.push(nextNode);
			}
		}
		switch (bothList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return bothList[0];
				break;
			default :
				return bothList;
		}
	};

	// 获取所有前位兄弟节点
	Base.prototype.allPrevious = function () {
		var length = this.elements.length - 1, previousNode = null, allPrevious = [];
		for (var i = length; i >= 0; i --) {
			previousNode = $.getPreviousNode(this.elements[i]);
			if (!previousNode) {
				this.elements.splice(i, 1);
				for (var j in allPrevious) {
					this.elements.splice(i + j, 0, allPrevious[j]);
				}
				allPrevious = [];
				continue;
			}
			allPrevious.push(previousNode);
			this.elements.splice(i, 1, previousNode);
			i ++;
		}
		return this;
	};

	// 输出所有前位兄弟节点
	Base.prototype.getAllPrevious = function () {
		var allPrevious = null, previousList = [];
		for (var i in this.elements) {
			allPrevious = $.getAllPrevious(this.elements[i]);
			if (!allPrevious) continue;
			for (var j in allPrevious) {
				previousList.push(allPrevious[j]);
			}
		}
		switch (previousList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return previousList[0];
				break;
			default :
				return previousList;
		}
	};

	// 获取所有后位兄弟节点
	Base.prototype.allNext = function () {
		var length = this.elements.length - 1, nextNode = null, allNext = [];
		for (var i = length; i >= 0; i --) {
			nextNode = $.getNextNode(this.elements[i]);
			if (!nextNode) {
				this.elements.splice(i, 1);
				for (var j in allNext) {
					this.elements.splice(i + j, 0, allNext[j]);
				}
				continue;
			}
			allNext.push(nextNode);
			this.elements.splice(i, 1, nextNode);
			i ++;
		}
		return this;
	};

	// 输出所有后位兄弟节点
	Base.prototype.getAllNext = function () {
		var allNext = null, nextList = [];
		for (var i in this.elements) {
			allNext = $.getAllNext(this.elements[i]);
			if (!allNext) continue;
			for (var j in allNext) {
				nextList.push(allNext[j]);
			}
		}
		switch (nextList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return nextList[0];
				break;
			default :
				return nextList;
		}
	};

	// 获取所有兄弟节点
	Base.prototype.allBoth = function () {
		var length = this.elements.length - 1, allPrevious = null, allNext = null;
		for (var i = length; i >= 0; i --) {
			allPrevious = $.getAllPrevious(this.elements[i]);
			allNext = $.getAllNext(this.elements[i]);
			this.elements.splice(i, 1);
			if (!!allPrevious) {
				for (var j in allPrevious) {
					this.elements.splice(i + j, 0, allPrevious[j]);
				}
			}
			if (!!allNext) {
				for (var k in allNext) {
					this.elements.splice(i + k, 0, allNext[k]);
				}
			}
		}
		return this;
	};

	// 输出所有兄弟节点
	Base.prototype.getAllBoth = function () {
		var allPrevious = null, allNext = null, bothList = [];
		for (var i in this.elements) {
			allPrevious = $.getAllPrevious(this.elements[i]);
			allNext = $.getAllNext(this.elements[i]);
			if (!!allPrevious) {
				for (var j in allPrevious) {
					bothList.push(allPrevious[j]);
				}
			}
			if (!!allNext) {
				for (var k in allNext) {
					bothList.push(allNext[k]);
				}
			}
		}
		switch (bothList.length) {
			case 0 :
				return this.info;
				break;
			case 1 :
				return bothList[0];
				break;
			default :
				return bothList;
		}
	};

	// 获取与设置元素节点内容(含HTML)
	Base.prototype.html = function (string) {
		var html = [];
		for (var i in this.elements) {
			if (!$.checkNode(this.elements[i])) continue;
			if (typeof string != 'undefined') { // 设置
				this.elements[i].innerHTML = string;
			} else { // 获取
				html.push(this.elements[i].innerHTML);
			}
		}
		switch (html.length) {
			case 0 :
				return this;
				break;
			case 1 :
				return html[0];
				break;
			default :
				return html;
		}
	};

	// 获取与设置元素节点文本
	Base.prototype.text = function (string) {
		var text = [];
		for (var i in this.elements) {
			if (!$.checkNode(this.elements[i])) continue;
			if (typeof string != 'undefined') { // 设置
				$.tool.setText(string, this.elements[i]);
			} else { // 获取
				text.push($.tool.getText(this.elements[i]));
			}
		}
		switch (text.length) {
			case 0 :
				return this;
				break;
			case 1 :
				return text[0];
				break;
			default :
				return text;
		}
	};

	// 获取与设置表单元素内容
	Base.prototype.value = function (string) {
		var value = [];
		for (var i in this.elements) {
			if (!$.checkNode(this.elements[i]) || typeof this.elements[i].value == 'undefined') continue;
			if (typeof string != 'undefined') { // 设置
				this.elements[i].value = string;
			} else { // 获取
				value.push(this.elements[i].value);
			}
		}
		switch (value.length) {
			case 0 :
				return this;
				break;
			case 1 :
				return value[0];
				break;
			default :
				return value;
		}
	};

	// 获取与设置表单元素默认内容
	Base.prototype.defaultValue = function (string) {
		var defaultValue = [];
		for (var i in this.elements) {
			if (!$.checkNode(this.elements[i]) || this.elements[i].defaultValue == 'undefined') continue;
			if (typeof string != 'undefined') { // 设置
				this.elements[i].defaultValue = string;
			} else { // 获取
				defaultValue.push(this.elements[i].defaultValue);
			}
		}
		switch (defaultValue.length) {
			case 0 :
				return this;
				break;
			case 1 :
				return defaultValue[0];
				break
			default :
				return defaultValue;
		}
	};

	// 获取与设置css样式
	Base.prototype.css = function () {
		var css = $.format(arguments);
		if (css.length == 0) return this;
		var patternCss = /^([a-z\-]+)[\s　]*(:|=)[\s　]*([#\w\-\.\s\(\)\'\\=\/\"%]+)[\s　]*;*$/i, cssList = [], cssValue = '', style = null;
		for (var i in this.elements) {
			if (!$.checkNode(this.elements[i]) || typeof this.elements[i].style == 'undefined') continue;
			if (css.length != 1 || patternCss.test(css[0])) { // 设置
				for (var j in css) {
					style = $.toStyle(css[j]);
					this.elements[i].style[style.key] = style.value;
				}
			} else { // 获取
				css = $.toStyle(css[0]);
				cssValue = $.tool.getStyle(css, this.elements[i]);
				if (typeof cssValue != 'undefined' && cssValue != '') cssList.push(cssValue);
			}
		}
		switch (cssList.length) {
			case 0 :
				return this;
				break;
			case 1 :
				return cssList[0];
				break;
			default :
				return cssList;
		}
	};

	// 添加 css 样式规则
	Base.prototype.addRule = function (ruleList, rulePosition, sheetIndex) {
		var rule = $.checkRule(rulePosition, sheetIndex);
		if (rule === false || typeof ruleList == 'undefined') return this;
		if (!(ruleList instanceof Array)) ruleList = [ruleList];
		var patternRule = /^([\w\-\.#\s,]+)[\s　]*\{[\s　]*([\s\\\/\'\"\.\-\w#=%\)\(:;]+)[\s　]*\}$/i, ruleName = '', ruleContent = '';
		for (var i in ruleList) {
			ruleList[i] = $.trim(ruleList[i]);
			if (patternRule.test(ruleList[i])) {
				ruleName = patternRule.exec(ruleList[i])[1];
				ruleContent = patternRule.exec(ruleList[i])[2];
				if (ruleName.indexOf(',') != -1) {
					ruleName = ruleName.split(',');
				}
				if (ruleName instanceof Array) { // 多层
					for (var j in ruleName) {
						$.tool.addRule(ruleName[j], ruleContent, rule.position, rule.sheet);
					}
				} else { // 单层
					$.tool.addRule(ruleName, ruleContent, rule.position, rule.sheet);
				}
			}
		}
		return this;
	};

	// 移除 css 样式规则
	Base.prototype.removeRule = function (namePosition, sheetIndex) {
		var rule = null;
		if (typeof namePosition == 'string') { // 关联
			rule = $.checkRule(null, sheetIndex);
		} else { // 索引
			rule = $.checkRule(namePosition, sheetIndex);
		}
		if (rule === false) return this;
		if (rule.position === null) { // 关联
			var nameList = $.tool.ruleName(rule.sheet);
			var patternName = new RegExp('(\\s|^)' + namePosition + '(,|$)', 'i');
			rule.position = [];
			for (var i in nameList) {
				if (patternName.test(nameList[i])) rule.position.push(i);
			}
		}
		if (rule.position !== null) {
			if (rule.position instanceof Array) {
				for (var i = rule.position.length - 1; i >= 0; i --) {
					$.tool.removeRule(rule.position[i], rule.sheet);
				}
			} else {
				$.tool.removeRule(rule.position, rule.sheet);
			}
		}
		return this;
	};

	// 元素事件绑定
	Base.prototype.bind = function (eventName, method, mode) {
		if (typeof eventName != 'string' || typeof method != 'function') return this;
		mode = (typeof mode == 'undefined') ? true : !!mode;
		eventName = $.trim(eventName.toLowerCase());
		if (eventName.indexOf('on') == 0) eventName = eventName.substring(2);
		for (var i in this.elements) {
			switch (eventName) {
				case 'cut' :
					$.tool.cut(this.elements[i], method, mode);
					break;
				case 'paste' :
					$.tool.paste(this.elements[i], method, mode);
					break;
				case 'mouseover' :
					$.tool.mouseover(this.elements[i], method, mode);
					break;
				case 'mouseout' :
					$.tool.mouseout(this.elements[i], method, mode);
					break;
				case 'mousewheel' :
					$.tool.mousewheel(this.elements[i], method, mode);
					break;
				case 'scroll' :
					$.tool.scroll(this.elements[i], method, mode);
					break;
				default :
					mode ? $.tool.loginEvent(this.elements[i], eventName, method) : $.tool.logoutEvent(this.elements[i], eventName, method);
			}
		}
		return this;
	};

	// HTML DOM 加载
	Base.prototype.loaded = function (method) {
		if (typeof method != 'function') return this;
		// 检测浏览器当前显示模式
		if (typeof document.compatMode != 'undefined') {
			switch (document.compatMode) {
				case 'CSS1Compat' : // 标准模式
					$.tool.htmlDOM(method);
					break;
				case 'BackCompat' : // 怪异模式
				default :
					alert('请切换标准模式 => CSS1Compat');
			}
		}
		return this;
	};

	// 获取元素尺寸与方位信息
	Base.prototype.getInfo = function (sizePosition) {
		if (typeof sizePosition == 'undefined') sizePosition = '';
		var info = [], sizePosition = sizePosition.toLowerCase();
		var innerInfo = null, outerInfo = null;
		for (var i in this.elements) {
			innerInfo = $.innerRectangle(this.elements[i]);
			outerInfo = $.outerRectangle(this.elements[i]);
			if (!innerInfo || !outerInfo) continue;
			switch (sizePosition) {
				case 'x' :
				case 'left' :
					info.push(outerInfo.left);
					break;

				case 'y' :
				case 'top' :
					info.push(outerInfo.top);
					break;

				case 'w' :
				case 'width' :
					info.push(innerInfo.width);
					break;

				case 'h' :
				case 'height' :
					info.push(innerInfo.height);
					break;

				default :
					info.push({
						width : innerInfo.width,
						height : innerInfo.height,
						w : innerInfo.width,
						h : innerInfo.height,
						left : outerInfo.left,
						top : outerInfo.top,
						x : outerInfo.left,
						y : outerInfo.top
					});
			}
		}
		switch (info.length) {
			case 0 :
				return this;
				break;
			case 1 :
				return info[0];
				break;
			default :
				return info;
		}
	};

	// 获取与设置滚动条
	Base.prototype.scroll = function (x, y) {
		if (typeof x != 'undefined' && x !== null) { // 设置横向坐标
			x = $.number(x);
			x = !isNaN(x) ? $.tool.scrollX(x) : false;
		} else { // 获取横向坐标
			x = $.tool.scrollX();
		}
		if (typeof y != 'undefined' && x !== null) { // 设置纵向坐标
			y = $.number(y);
			y = !isNaN(y) ? $.tool.scrollY(y) : false;
		} else { // 获取纵向坐标
			y = $.tool.scrollY();
		}
		return {
			x : x,
			y : y,
			left : x,
			top : y
		};
	};

	// 添加 class 选择器
	Base.prototype.addClass = function () {
		var classList = $.format(arguments), space = '';
		for (var i in this.elements) {
			space = '';
			for (var j in classList) {
				classList[j] = $.trim(classList[j]);
				if (!$.hasClass(classList[j], this.elements[i])) {
					if (this.elements[i].className != '') space = ' ';
					this.elements[i].className += space + classList[j];
				}
			}
		}
		return this;
	};

	// 移除 class 选择器
	Base.prototype.removeClass = function () {
		var classList = $.format(arguments);
		for (var i in this.elements) {
			className = this.elements[i].className;
			for (var j in classList) {
				classList[j] = $.trim(classList[j]);
				if ($.hasClass(classList[j], this.elements[i])) {
					className = className.replace(new RegExp('(^|\\s)' + classList[j] + '(\\s|$)'), ' ');
				}
			}
			this.elements[i].className = $.trim(className);
		}
		return this;
	};

	// 添加元素节点
	Base.prototype.add = function (elementName, attributes, html) {
		if (typeof elementName != 'string') return this;
		var elementNode = document.createElement(elementName);
		if (typeof attributes != 'undefined' || attributes !== null) $.addAttribute(attributes, elementNode);
		if (typeof html != 'undefined') $(elementNode).html(html);
		var elements = [];
		if (this.getNodes() == this.info) {
			elements.push(document.body);
		} else {
			elements = this.elements;
		}
		var nodes = [];
		for (var i in elements) {
			if (!$.checkNode(elements[i]) || elements[i] == document) continue;
			flag = true;
			nodes[i] = elementNode.cloneNode(true);
			elements[i].appendChild(nodes[i]);
		}
		elementNode = null; // 清理元素副本
		var main = this;
		return {
			me : function () {
				switch (nodes.length) {
					case 0 :
						return this.info;
						break;
					case 1 :
						return nodes[0];
						break;
					default :
						return nodes;
				}
			},
			main : function () {
				return main;
			}
		};
	};

	// 删除元素节点
	Base.prototype.remove = function () {
		var parentNode = null, length = this.elements.length - 1;
		for (var i = length; i >= 0; i --) {
			if (!$.checkNode(this.elements[i])) continue;
			parentNode = this.elements[i].parentNode;
			if (parentNode !== null) {
				parentNode.removeChild(this.elements[i]);
				this.elements.splice(i, 1);
			}
		}
		return this;
	};

	// 剪切与复制元素节点
	Base.prototype.move = function (targetElement, mode) {
		mode = (typeof mode == 'undefined') ? true : !!mode;
		targetElement = $(targetElement).getNodes();
		if (targetElement == this.info) return this;
		var length = this.elements.length - 1;
		for (var i = length; i >= 0; i --) {
			if (!$.checkNode(this.elements[i]) || this.elements[i] == document) continue;
			if (targetElement instanceof Array) { // 集群
				for (var j in targetElement) {
					if (!$.checkNode(targetElement[j]) || targetElement[j] == document) continue;
					targetElement[j].appendChild(this.elements[i].cloneNode(true));
				}
			} else { // 单一
				if (!$.checkNode(targetElement) || targetElement == document) return this;
				targetElement.appendChild(this.elements[i].cloneNode(true));
			}
			// 检测模式
			if (mode) { // 剪切
				$(this.elements[i]).remove();
				this.elements.splice(i, 1);
			}
		}
		return this;
	};

	// 获取元素总个数
	Base.prototype.getLength = function () {
		return this.elements.length;
	};

	// 获取所有表单元素
	Base.prototype.formAll = function () {
		var formAll = document.forms;
		for (var i = 0; i < formAll.length; i ++) {
			this.elements.push(formAll[i]);
		}
		return this;
	};

	// 获取指定表单元素
	Base.prototype.form = function (index) {
		if (typeof index != 'number' && typeof index != 'string') return this;
		if (typeof index == 'number') index = $.number(index);
		if (typeof index == 'string') index = $.trim(index);
		var form = document.forms[index];
		if (typeof form != 'undefined') {
			if ($.checkNode(form)) { // W3C
				this.elements.push(form);
			} else { // IE 6/7/8
				for (var i = 0; i < form.length; i ++) {
					this.elements.push(form[i]);
				}
			}
		}
		return this;
	};

	// 获取所有表单子元素
	Base.prototype.formChildAll = function () {
		var length = this.elements.length - 1, elements = [];
		for (var i = length; i >= 0; i --) {
			elements = this.elements[i].elements;
			this.elements.splice(i, 1);
			// 检测表单合法性
			if (typeof elements != 'object') continue;
			for (var j = 0; j < elements.length; j ++) {
				this.elements.splice(i + j, 0, elements[j]);
			}
		}
		return this;
	};

	// 获取指定表单子元素
	Base.prototype.formChild = function (index) {
		if (typeof index != 'number' && typeof index != 'string') return this;
		if (typeof index == 'number') index = $.number(index);
		if (typeof index == 'string') index = $.trim(index);
		var length = this.elements.length - 1, elements = [], elementNode = null;
		for (var i = length; i >= 0; i --) {
			elements = this.elements[i].elements;
			this.elements.splice(i, 1);
			if (typeof elements != 'object') continue;
			elementNode = elements[index];
			if (typeof elementNode == 'undefined') continue;
			if ($.checkNode(elementNode)) { // 单一
				this.elements.splice(i, 0, elementNode);
			} else { // 集群
				for (var j = 0; j < elementNode.length; j ++) {
					this.elements.splice(j + i, 0, elementNode[j]);
				}
			}
		}
		return this;
	};

	// 新增 Option 元素
	Base.prototype.addOption = function (optionText, optionValue, selected) {
		if (typeof optionText == 'undefined') return this;
		if (typeof optionValue == 'undefined') optionValue = optionText;
		selected = (typeof selected == 'undefined') ? false : !!selected;
		var option = null;
		for (var i in this.elements) {
			// 检测是否 select 元素
			if (!$.inArray(typeof this.elements[i].add, ['function', 'object'])) continue;
			option = new Option(optionText, optionValue);
			option.selected = selected;
			this.elements[i].add(option, undefined);
		}
		return this;
	};

	// 移除 Option 元素
	Base.prototype.removeOption = function (index) {
		if (typeof index == 'undefined' || isNaN($.number(index))) return this;
		index = $.number(index);
		var indexMax = 0;
		for (var i in this.elements) {
			if (!$.inArray(typeof this.elements[i].remove, ['function', 'object'])) continue;
			indexMax = this.elements[i].options.length - 1;
			if (index > indexMax) index = indexMax;
			this.elements[i].remove(index);
		}
		return this;
	};

	// 指定需保留的 Option 元素个数
	Base.prototype.keepOption = function (length) {
		if (typeof length == 'undefined' || isNaN($.number(length))) return this;
		length = $.number(length);
		var lengthMax = 0;
		for (var i in this.elements) {
			if (typeof this.elements[i].options != 'object') continue;
			lengthMax = this.elements[i].options.length;
			if (length > lengthMax) length = lengthMax;
			this.elements[i].options.length = length;
		}
		return this;
	};

	// 获取所有 Option 元素
	Base.prototype.optionAll = function () {
		var length = this.elements.length - 1;
		var options = [];
		for (var i = length; i >= 0; i --) {
			options = this.elements[i].options;
			this.elements.splice(i, 1);
			if (typeof options != 'object') continue;
			for (var j = 0; j < options.length; j ++) {
				this.elements.splice(j + i, 0, options[j]);
			}
		}
		return this;
	};

	// 自动加载插件
	Base.prototype.plugins = function () {
		var methodList = $.format(arguments);
		var name = '';
		for (var i in methodList) {
			name = $.getName(methodList[i]);
			if (name === false) continue;
			Base.prototype[name] = methodList[i];
		}
		return this;
	};

})();
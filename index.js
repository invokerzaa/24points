var n = new Array();
var flag = [0, 0, 0, 0];   //标记牌是否被使用过
var repeatFlag = true;   //标记不能连续点击两张牌
var counter2 = 0;
$(function () {
	var index = 0;
	$('#randomPai').click(function () {
		$(".multiple-parent").css("display", "none")
		$(".selectCard").css("display", "none")
		$("#surePai").css("display", "none")
		$("#reset").css("display", "none")
		$("#funCount").prop("disabled", false);
		$('#funCount').addClass("button gray");
		$('#funCount').removeClass('disabledBtn');
		n.splice(0, n.length)
		toInput()
		$("#result").html('');
		repeatFlag = true;
		for (var i = 0; i < 4; i++) {
			$("#pai" + i).fadeTo('slow', 1);
			$("#pai" + i)
				.slideUp('slow')
				.slideDown('slow', function () { $(this).clearQueue() })
				.queue(function () {
					$(this).css('background', 'orange');
					$(this).dequeue();
				})
				.hide('slow');
			flag[i] = 0;    //标记牌未被使用过
			n[i] = parseInt(Math.random() * 13 + 1);
			setImage(n[i], i);
			$("#pai" + i).html(n[i]);
		}
	});

	$("#funCount").click(function () {
		$("#funCount").prop("disabled", true);
		$('#funCount').removeClass("button gray");
		$('#funCount').addClass('disabledBtn');
		counter = 0;
		funCount();

	});
	$('#freePai').click(function () {
		$("#funCount").prop("disabled", false);
		$('#funCount').addClass("button gray");
		$('#funCount').removeClass('disabledBtn');
		$("#result").html('');
		n.splice(0, n.length)
		toInput()
		$(".selectCard").css("display", "block")
		$("#surePai").css("display", "block")
		$("#reset").css("display", "block")

		selectCard();
	});
	$('#surePai').click(function () {

		if (n.length !== 4) {
			alert("必须选择四张牌")
		} else {
			$(".multiple-parent").css("display", "none")
			$(".selectCard").css("display", "none")
			$("#surePai").css("display", "none")
			$("#reset").css("display", "none")
			n.map((item, index) => {
				setImage(item, index);
				$("#pai" + index).html(item);
			})

		}
	});
	$('#reset').click(function () {
		n.splice(0, n.length)
		toInput()
		var span = "<span class='placeholder'>请选择要展示的数据</span>"
		$(".multiple-select").html(span)

	});

	/*下拉复选框相关操作开始*/
	$(".multiple-select").click(function () {
		if ($(".multiple-parent").css("display") == "none") {
			$(".multiple-parent").css("display", "block")
		} else {
			$(".multiple-parent").css("display", "none")
		}
	})
	$(".multiple-parent").on("click", "li", function (e) {
		e.stopPropagation()
		e.preventDefault()
		var $label = $(this).children("label")
		var input = this.getElementsByTagName("input")[0]
		if (input.checked) {
			input.checked = false
		} else {
			input.checked = false
		}


	});
	// 点击X按钮时删去相应的选择值
	$(".multiple-select").on("click", ".select-delete", function (e) {
		e.stopPropagation()
		var value = $(this).parent().children(".select-value").html();

		$(".multiple-parent ul li").each(function (index, elem) {
			if ($(elem).children("label").html() == value) {

				elem.getElementsByTagName("input")[0].checked = false;
			}
		})
		$(this).parent().remove();
		let deleteData = $(this).parent()[0].outerText.slice(0, 1)
		n = $.grep(n, function (value) {
			return value != deleteData;
		});
		var len = $(".multiple-select").children().length;
		if (len == 0) {
			var span = "<span class='placeholder'>请选择要展示的数据</span>"
			$(".multiple-select").append(span)
		}
	})


});
function toInput(c) {
	if (c) {
		n.push(c);
	}

	if (n.length > 0) {
		//把选择的值显示在div.multiple-select中
		$(".multiple-select").empty();
		let showArr = JSON.parse(JSON.stringify(n))
		showArr.map((item, index) => {
			if (item == 1) {
				showArr[index] = "A"
			} else if (item == 11) {
				showArr[index] = "J"
			} else if (item == 12) {
				showArr[index] = "Q"
			} else if (item == 13) {
				showArr[index] = "K"
			}
		})
		for (var i = 0; i < showArr.length; i++) {
			var span = `<span class='select-content'><span class='select-value'>${showArr[i]}</span><span class='select-delete'>&times;</span></span>`
			$(".multiple-select").append(span)
		}
	} else {
		$(".multiple-select").empty();
		var span = "<span class='placeholder'>请选择要展示的数据</span>"
		$(".multiple-select").append(span)
	}


}
function setImage(value, num) {
	if (num == 0) {
		if (value == 1 || value == "A") {
			$("#pai" + num).css('background-position', '-7px -222px');
		} else if (value == 2) {
			$("#pai" + num).css('background-position', '-162px -222px');
		} else if (value == 3) {
			$("#pai" + num).css('background-position', '-316px -222px');
		} else if (value == 4) {
			$("#pai" + num).css('background-position', '-472px -222px');
		} else if (value == 5) {
			$("#pai" + num).css('background-position', '-627px -222px');
		} else if (value == 6) {
			$("#pai" + num).css('background-position', '-782px -222px');
		} else if (value == 7) {
			$("#pai" + num).css('background-position', '-937px -222px');
		} else if (value == 8) {
			$("#pai" + num).css('background-position', '-1092px -222px');
		} else if (value == 9) {
			$("#pai" + num).css('background-position', '-1247px -222px');
		} else if (value == 10) {
			$("#pai" + num).css('background-position', '-1402px -222px');
		} else if (value == 11 || value == "J") {
			$("#pai" + num).css('background-position', '-1556px -221px');
		} else if (value == 12 || value == "Q") {
			$("#pai" + num).css('background-position', '-1712px -221px');
		} else if (value == 13 || value == "K") {
			$("#pai" + num).css('background-position', '-1867px -221px');
		}
	} else if (num == 1) {
		if (value == 1 || value == "A") {
			$("#pai" + num).css('background-position', '-7px -7px');
		} else if (value == 2) {
			$("#pai" + num).css('background-position', '-162px -7px');
		} else if (value == 3) {
			$("#pai" + num).css('background-position', '-316px -7px');
		} else if (value == 4) {
			$("#pai" + num).css('background-position', '-472px -7px');
		} else if (value == 5) {
			$("#pai" + num).css('background-position', '-627px -7px');
		} else if (value == 6) {
			$("#pai" + num).css('background-position', '-782px -7px');
		} else if (value == 7) {
			$("#pai" + num).css('background-position', '-937px -7px');
		} else if (value == 8) {
			$("#pai" + num).css('background-position', '-1092px -7px');
		} else if (value == 9) {
			$("#pai" + num).css('background-position', '-1247px -7px');
		} else if (value == 10) {
			$("#pai" + num).css('background-position', '-1402px -7px');
		} else if (value == 11 || value == "J") {
			$("#pai" + num).css('background-position', '-1556px -6px');
		} else if (value == 12 || value == "Q") {
			$("#pai" + num).css('background-position', '-1712px -6px');
		} else if (value == 13 || value == "K") {
			$("#pai" + num).css('background-position', '-1867px -6px');
		}
	} else if (num == 2) {
		if (value == 1 || value == "A") {
			$("#pai" + num).css('background-position', '-7px -652px');
		} else if (value == 2) {
			$("#pai" + num).css('background-position', '-162px -652px');
		} else if (value == 3) {
			$("#pai" + num).css('background-position', '-316px -652px');
		} else if (value == 4) {
			$("#pai" + num).css('background-position', '-472px -652px');
		} else if (value == 5) {
			$("#pai" + num).css('background-position', '-627px -652px');
		} else if (value == 6) {
			$("#pai" + num).css('background-position', '-782px -652px');
		} else if (value == 7) {
			$("#pai" + num).css('background-position', '-937px -652px');
		} else if (value == 8) {
			$("#pai" + num).css('background-position', '-1092px -652px');
		} else if (value == 9) {
			$("#pai" + num).css('background-position', '-1247px -652px');
		} else if (value == 10) {
			$("#pai" + num).css('background-position', '-1402px -652px');
		} else if (value == 11 || value == "J") {
			$("#pai" + num).css('background-position', '-1556px -651px');
		} else if (value == 12 || value == "Q") {
			$("#pai" + num).css('background-position', '-1712px -651px');
		} else if (value == 13 || value == "K") {
			$("#pai" + num).css('background-position', '-1867px -651px');
		}
	} else {
		if (value == 1 || value == "A") {
			$("#pai" + num).css('background-position', '-7px -438px');
		} else if (value == 2) {
			$("#pai" + num).css('background-position', '-162px -438px');
		} else if (value == 3) {
			$("#pai" + num).css('background-position', '-316px -438px');
		} else if (value == 4) {
			$("#pai" + num).css('background-position', '-472px -438px');
		} else if (value == 5) {
			$("#pai" + num).css('background-position', '-627px -438px');
		} else if (value == 6) {
			$("#pai" + num).css('background-position', '-782px -438px');
		} else if (value == 7) {
			$("#pai" + num).css('background-position', '-937px -438px');
		} else if (value == 8) {
			$("#pai" + num).css('background-position', '-1092px -438px');
		} else if (value == 9) {
			$("#pai" + num).css('background-position', '-1247px -438px');
		} else if (value == 10) {
			$("#pai" + num).css('background-position', '-1402px -438px');
		} else if (value == 11 || value == "J") {
			$("#pai" + num).css('background-position', '-1556px -436px');
		} else if (value == 12 || value == "Q") {
			$("#pai" + num).css('background-position', '-1712px -436px');
		} else if (value == 13 || value == "K") {
			$("#pai" + num).css('background-position', '-1867px -436px');
		}
	}
}


function funCount() {
	counter = 0;
	if (n[0] > 0 && n[1] > 0 && n[2] > 0 && n[3] > 0 && n[0] < 14 && n[1] < 14 && n[2] < 14 && n[3] < 14) {
		log("<font size=5><b>" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + "的24点答案：</b></font><br>");
		funMain();
		if (counter == 0) {
			log("此题无解！");
		}
	} else {
		alert("还未发牌");
	}
}
//主程序
function funMain() {
	var m = new Array();
	//四种运算符
	m[0] = "+";
	m[1] = "-";
	m[2] = "*";
	m[3] = "/";

	//11种表达式
	var exp1 = "a m1 b m2 c m3 d;";
	var exp2 = "(a m1 b) m2 c m3 d;";
	var exp3 = "(a m1 b m2 c) m3 d;";
	var exp4 = "((a m1 b) m2 c) m3 d;";
	var exp5 = "(a m1 (b m2 c)) m3 d;";
	var exp6 = "a m1 (b m2 c) m3 d;";
	var exp7 = "a m1 (b m2 c m3 d);";
	var exp8 = "a m1 ((b m2 c) m3 d);";
	var exp9 = "a m1 (b m2 (c m3 d));";
	var exp10 = "a m1 b m2(c m3 d);";
	var exp11 = "(a m1 b) m2 (c m3 d);";

	var a, b, c, d;//四个数字
	var m1, m2, m3;//三个运算符

	for (var i = 0; i < 4; i++) {
		a = n[i];
		for (var j = 0; j < 4; j++) {
			if (i == j) continue;//从未选的三个数字中选择一个数字
			b = n[j];
			for (var x = 0; x < 4; x++) {
				if (x == j || x == i) continue;//从未选的两个数字中选择一个数字
				c = n[x];
				for (var y = 0; y < 4; y++) {
					if (y == x || y == j || y == i) continue;//从未选的一个数字中选择一个数字
					d = n[y];

					for (var ta = 0; ta < 4; ta++) {
						m1 = m[ta];
						for (var tb = 0; tb < 4; tb++) {
							m2 = m[tb];
							for (var tc = 0; tc < 4; tc++) {
								m3 = m[tc];
								for (var k = 1; k < 12; k++) {
									eval("test(exp" + k + ",a,b,c,d,m1,m2,m3);");
								}
							}
						}
					}
				}
			}
		}
	}
}

function log(str) {
	var htmlStr = $("#result").html();
	$("#result").html(htmlStr + "<br>" + str);
}
//生成计算表达式
function genExpress(exp, a, b, c, d, m1, m2, m3) {
	var exp = exp.replace("a", a);
	exp = exp.replace("b", b);
	exp = exp.replace("c", c);
	exp = exp.replace("d", d);
	exp = exp.replace("m1", m1);
	exp = exp.replace("m2", m2);
	exp = exp.replace("m3", m3);
	return exp;
}
var answer = new Array();//正确答案的表达式
var counter = 0;//答案的个数
//测试表达式是否正确
function test(expn, a, b, c, d, m1, m2, m3) {
	var exp;
	var ret;
	exp = genExpress(expn, a, b, c, d, m1, m2, m3);//生成计算表达式
	eval("ret = " + exp);
	if (Math.abs(ret - 24) == 0) {
		exp = exp.replace(";", "");
		exp = replaceAll(exp, "*", "×");
		exp = replaceAll(exp, "/", "÷");
		var have = false;
		for (var i = 0; i < counter; i++) {
			if (exp == answer[i]) {
				have = true;
				break;
			}
		}
		if (!have) {
			answer[counter] = exp;
			counter++;
			log("<font class='answer'><b>" +
				"<span class='resultNum'>" + counter + ":" + "</span>" +
				"&nbsp;&nbsp;"
				+ "<span class='resultMath'>" + exp + "" + " = 24" + "</b></font>");
		}
	}
}
function replaceAll(streng, soeg, erstat) {
	var st = streng;
	if (soeg.length == 0)
		return st;
	var idx = st.indexOf(soeg);
	while (idx >= 0) {
		st = st.substring(0, idx) + erstat + st.substr(idx + soeg.length);
		idx = st.indexOf(soeg);
	}
	return st;
}
var cardList = [
	{ "id": 1, "name": "A" },
	{ "id": 2, "name": "2" },
	{ "id": 3, "name": "3" },
	{ "id": 4, "name": "4" },
	{ "id": 5, "name": "5" },
	{ "id": 6, "name": "6" },
	{ "id": 7, "name": "7" },
	{ "id": 8, "name": "8" },
	{ "id": 9, "name": "9" },
	{ "id": 10, "name": "10" },
	{ "id": 11, "name": "J" },
	{ "id": 12, "name": "Q" },
	{ "id": 13, "name": "K" },

]


function logSelect(str) {
	var htmlStr = $("#selected1").html();
	$("#selected1").html(htmlStr + "<br>" + str);
}

function selectCard() {
	$.each(cardList, function (index, element) {
		logSelect(`<li class="li-group1">
		<input type="checkbox"  id="${element.id}" /><label for="${element.id}" onclick="toInput('${element.id}')">${element.name}</label>
	</li>`)
	});

}


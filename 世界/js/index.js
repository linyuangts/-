window.onload = function() {
	var zhu = document.querySelector(".Nav .Nav_center .left .a2")
	var xia = document.querySelector(".Nav .Nav_center .left .a2 .xia")
	var shi = document.querySelector(".Nav .Nav_center .left .a2 .xia .ding")
	shi.onclick = function() {
		xia.style.display = "none"
	}
	var chan = document.querySelector(".sou .sou_center .shuo .chan .ping ")
	var chan1 = document.querySelectorAll(".sou .sou_center .shuo .chan .qi li ")
	chan1[0].onclick = function() {
		if (chan.textContent == "产品") {
			chan.textContent = "企业"
			this.textContent = "产品"
		} else {
			chan.textContent = "产品"
			this.textContent = "企业"
		}

	}

	function data(callback) {
		var xhr = new XMLHttpRequest()
		xhr.open("get", "data/AllTypes.json")
		xhr.send()
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				var data = JSON.parse(xhr.responseText)
				callback(data)
			}
		}
	}
	var caidan = document.querySelector(".cai_center_left .left")
	var cai = document.querySelector(".cai .cai_center .center .xuan .ka")
	var html = ""
	var html2 = ""
	data(function(res) { //渲染菜单栏
		for (let i = 0; i < res.length; i++) {
			html += `<li><a class="a1">${res[i].title}</a><span class="a2">`
			for (let j = 0; j < res[i].des.length; j++) {
				html += `<a >${res[i].des[j]}</a>`
			}
			html2 += `<li><span class="jia"></span>`
			for (let k = 0; k < res[i].content.length; k++) {
				html2 +=
					`<span class="sp1"><span class="sp2"><a>${res[i].content[k].type}</a></span><span class="sp3">`
				for (let s = 0; s < res[i].content[k].list.length; s++) {
					html2 += `<a>${res[i].content[k].list[s]}</a>`
				}
				html2 += `</span></span>`
			}
			html2 += `</li>`
		}
		cai.innerHTML = html2
		caidan.innerHTML = html + `</span></li>`
		var chu = document.querySelectorAll(".cai_center_left .left li")
		var dian = document.querySelectorAll(".cai .cai_center .center .xuan .ka li")
		var ke = document.querySelector(".cai .cai_center .center .xuan .ka")
		var jia = document.querySelectorAll(".cai .cai_center .center .xuan .ka li .jia")
		jia[0].innerHTML = `<a>工业品行业资源</a>`
		jia[1].innerHTML = `<a>原材料行业资源</a>`
		jia[2].innerHTML = `<a>消费品行业资源</a>`
		jia[3].innerHTML = `<a>农业畜牧行业资源</a>`
		jia[4].innerHTML = `<a>宠物园艺行业资源</a>`
		jia[5].innerHTML = `<a>商务服务行业资源</a>`
		var dian0 = document.querySelector(".cai .cai_center .center .lun .dian1")
		var xiao = document.querySelector(".cai .cai_center .center .buttom")
		for (let i = 0; i < chu.length; i++) { // 菜单事件
			chu[i].onmouseenter = function() {
				this.style.background = "#e9e9e9"
				dian[i].style.display = "block"
				ke.style.display = "block"
				dian0.style.display = "none"
				xiao.style.display = "none"
			}
			chu[i].onmouseleave = function() {
				chu[i].style.background = ""
				dian[i].style.display = "none"
				ke.style.display = "none"
				dian0.style.display = "block"
				xiao.style.display = "block"
			}
		}
		for (let j = 0; j < dian.length; j++) {
			dian[j].onmouseenter = function() {
				this.style.display = "block"
				chu[j].style.background = "#e9e9e9"
				ke.style.display = "block"
				dian0.style.display = "none"
				xiao.style.display = "none"
			}
			dian[j].onmouseleave = function() {
				dian[j].style.display = "none"
				chu[j].style.background = ""
				ke.style.display = "none"
				xiao.style.display = "block"
				dian0.style.display = "block"
			}
		}
		var tupian = document.querySelectorAll(".cai .cai_center .center .lun div")
		var x2=document.querySelector(".cai .cai_center .center")
		var dianji = document.querySelectorAll(".cai .cai_center .center .lun .dian1 li")
		dianji[0].style.background = "rgba(255,255,255,.5)"
		for (let i = 0; i < dianji.length; i++) {
			dianji[i].onmouseenter = function() {
				for (let j = 0; j < tupian.length; j++) {
					dianji[j].style.background = ""
					tupian[j].style.display = "none"
				}
				this.style.background = "rgba(255,255,255,.5)"
				tupian[i].style.display = "block"
			}
		}
		var s = 0
		var temer = setInterval(function() {
			s++
			if (s > 1) {
				s = 0
			}
			dianji[s].onmouseenter()
		}, 5000)
		x2.onmouseenter=function(){
			clearInterval(temer)
		}
		x2.onmouseleave=function(){
			temer = setInterval(function() {
				s++
				if (s > 1) {
					s = 0
				}
				dianji[s].onmouseenter()
			}, 5000)
		}
	})
	fetch("data/purchase.json").then(res => {
		res.json().then(data => {
			var html = ""
			var tong=document.querySelector(".cai .cai_center .right .right_buttom")
			var gou = document.querySelector(".box .cai .cai_center .right .right_buttom .gou")
			for (let i = 0; i < data.length; i++) {
				html += `<li>`
				for (let j = 0; j < data[i].li.length; j++) {
					html += `<span class="cai2"><a>${data[i].li[j]}</a></span>`
				}
				html += `</li>`
			}
			gou.innerHTML = html
			var title = document.querySelectorAll(
				".box .cai .cai_center .right .right_buttom .title p")
			var gou1 = document.querySelectorAll(
				".box .cai .cai_center .right .right_buttom .gou li")
			gou1[0].style.display = "block"
			for (let i = 0; i < title.length; i++) {
				title[i].onclick = function() {
					for (let j = 0; j < gou1.length; j++) {
						title[j].style.color = "#000"
						gou1[j].style.display = "none"
					}
					this.style.color = "#1E60D3"
					gou1[i].style.display = "block"
				}
			}
			var s = 0
			var ss = 0
			for (let i = 0; i < gou1.length; i++) {
				gou1[i].onclick = function() {
					ss++
					if (ss > data[i].li.length) {
						ss = 0
					}
					gou1[i].scrollTo(0, 15 * ss)

				}
			}
			var x1=setInterval(function() {
				s++
				if (s == 2) {
					s = 0
				}
				gou1[s].click()
			}, 1000)
			tong.onmouseenter=function(){
				clearInterval(x1)
			}
			tong.onmouseleave=function(){
				x1=setInterval(function() {
					s++
					if (s == 2) {
						s = 0
					}
					gou1[s].click()
				}, 1000)
			}
		})
	})
	fetch("data/carousel.json").then(res => {
		res.json().then(data => {
			var da = document.querySelector(".show .show_center .center .chao .da")
			var html = ""
			for (let i = 0; i < data.length; i++) {
				html +=
					`<div class="kuang"><a class="kua"><img src=${data[i].图片}></a><div class="xiao"><a href=${data[i].标题链接} class="t0">${data[i].标题}</a><p class="p1">${data[i].more}</p></div></div>`
			}
			da.innerHTML = html
			var da1 = document.querySelector(".show .show_center .center .chao .da")
			var kuang1 = document.querySelectorAll(".show .show_center .center .chao .da .kuang")
			var spead = -226;
			da1.innerHTML = da1.innerHTML + da1.innerHTML;
			var left = document.querySelector(".show .show_center .center .jian .left")
			var right = document.querySelector(".show .show_center .center .jian .right")
			right.onclick = function() {
				da1.style.left = da1.offsetLeft +spead + 'px';
				if (da1.offsetLeft < -da1.offsetWidth / 2) {
					da1.style.left = '0';
					
				}
				if (da1.offsetLeft > 0) {
					da1.style.left = -da1.offsetWidth / 2 + 'px';
				}
				
				
			}
			left.onclick = function() {
				if (da1.offsetLeft == 0) {
					da1.style.left = -5424 + 'px';
				}
				if (da1.offsetLeft > da1.offsetWidth / 2) {
					da1.style.left = '0';
				}
				da1.style.left = da1.offsetLeft + 226 + 'px';
				

			}
			var ting=document.querySelector(".show .show_center .center")
			var s1=setInterval(tad, 1000)
			function tad() {
				da1.style.transition="0"
				right.click()
				
			}
			ting.onmouseenter=function(){
			clearInterval(s1)
			}
			ting.onmouseleave=function(){
				s1=setInterval(tad, 1000)
			}
		})
	})
	fetch("data/recommend.json").then(res => {
		res.json().then(data => {
			var center = document.querySelector(".hang .hang_center")
			var html = ""
			for (let i = 0; i < data.length; i++) {
				html += `<h3 class="biaoti">${data[i].title}</h3><ul class="tui">`
				for (let j = 0; j < data[i].list.length; j++) {
					var sa = data[i].list[j]
					html +=
						`<li class="tuikuang"><P class="tuibiao">${sa.hd}</P><a class="lan">${sa.name}</a><div class="jie"><span class="xiao2">主营:</span>${sa.major}</div></li>`
				}
				html += `</ul>`
			}
			center.innerHTML = html
		})
	})
	fetch("data/brand.json").then(res => {
		res.json().then(data => {
			var jian = document.querySelector(".pai .pai_center .jian")
			html = ""
			for (let i = 0; i < 1; i++) {
				html += `<h3 class="title">${data.title}</h3><ul class="jie1">`
				for (let j = 0; j < data.list.length; j++) {
					var se = data.list[j]
					html +=
						`<li class="jie"><a href="${se.link}" alt="${se.alt}" class="bao"><img class="ding" src=${se.img_url}></a></li>`
				}
				html += `</ul>`
			}
			jian.innerHTML = html
		})
	})
	fetch("data/goods.json").then(res => {
		res.json().then(data => {
			var dakong = `<div class="gong">
						<div class="gong_center">
							<div class="xuan">
								<h3 class="xuanbiao"></h3>
								<p class="xuanzi"></p>
								<div class="yuding">
									<a class="yu">
										<span></span>
									</a>
									<ul class="ka">
										<li>
											<div>
												<a>
													<img />
												</a>
											</div>
										</li>
									</ul>
									<div class="xiaob1"></div>
									<a class="left"></a>
									<a class="right"></a>
									<div class="dian3"></div>
								</div>
							</div>
							<div class="center">
								<div class="biao">
									<a></a>
									<span>|</span>
								</div>
								<div class="chan">
									<a class="bei"><img class="tu" /></a>
									<p class="jie"><a></a></p>
									<p class="jia"></p>
								</div>
							</div>
							<div class="center_right">
							</div>
						</div>
					</div>
					<div class="guang"><img /></div>
					`
			var fang = document.querySelector(".damo")
			for (let i = 0; i < 1; i++) {
				dakong += dakong
			}
			dakong = dakong + dakong + dakong
			fang.innerHTML = dakong
			var biaoti = ""
			var bei = ""
			var right = ""
			var lun = ""
			var zifu = ""
			var list = ""
			var left1 = []
			var center2 = []
			var right3 = []
			var lun4 = []
			var zi = []
			var ti = document.querySelectorAll(".damo .gong .gong_center .center .biao")
			var jing = document.querySelectorAll(".damo .gong .gong_center .center .chan")
			var right1 = document.querySelectorAll(".damo .gong .gong_center .center_right")
			var lunbo = document.querySelectorAll(".damo .gong .gong_center .xuan")
			var pian = document.querySelectorAll(".guang img")
			var list1 = document.querySelector(".lian .lian_center .list")
			for (let i = 0; i < data.length; i++) {
				if (data[i].id == 1) {
					for (let j = 0; j < data[i].titles.length; j++) {
						biaoti +=
							`<a class="ab1">${data[i].titles[j]}</a><span class="shu">|</span>`
					}
					biaoti+=`<ul class="hei">`
					for(let zi=0;zi<3;zi++){
						biaoti+=`<li><a></a></li>`
					}biaoti+=`</ul>`
					for (let j = 0; j < data[i].goods.length; j++) {
						var ji = data[i].goods[j]
						bei += `<div class="ku"><a class="bei"><img class="tu" src=${ji.image_src} /></a>
							<p class="jie"><a href="${ji.url}">${ji.des}</a></p>`
						if (!isNaN(`${ji.price}` * 1)) {
							bei += `<p class="jia">￥${ji.price}</p></div>`
						} else {
							bei += `<p class="jia">${ji.price}</p></div>`
						}
					}
					right += `<div class="head">诚信商家</div>`
					for (let x = 0; x < data[i].merchant.length; x++) {
						var gr = data[i].merchant[x]
						right += `<div class="xu">
							<p class="yang">
								<a><i class="v"></i>${gr.name}</a>
							</p>
							<p class="fan">经营范围：${gr.scope}</p>
						</div>`
					}
					lun += `<h3 class="xuanbiao">${data[i].types}</h3>
								<p class="xuanzi">${data[i].en}</p>
								<div class="yuding">
									<a class="yu">
										<span></span>
									</a>
									<ul class="ka">`
					for (let y = 0; y < data[i].banns_imgs.length; y++) {
						lun +=
							`<li class="luni"><div><a><img src=${data[i].banns_imgs[y]} /></a> </div></li>`
					}
					lun += `</ul>
						 <div class="xiaob1">${data[i].son[0]}</div>
						 <a class="left"></a>
						 <a class="right"></a>
						 <ul class="dian3">`
					for (let ss = 0; ss < data[i].son.length; ss++) {
						
						lun += `<li class="dian"></li>`
					}
					
					lun += `</ul>`
					right3.push(right)
					left1.push(biaoti)
					center2.push(bei)
					lun4.push(lun)

					right = ""
					biaoti = ""
					bei = ""
					lun = ""
				}
				if (data[i].id == 2) {
					zi.push(`${data[i].image_src}`)
				}
				if (data[i].id == 3) {
					for (let n = 0; n < data[i].links.length; n++) {
						list +=
							`<li class="mao"><a href=${data[i].links[n].url}>${data[i].links[n].title}</a></li>`
					}
				}
			}
			for (let i = 0; i < 6; i++) {
				right1[i].innerHTML = right3[i]
				jing[i].innerHTML = center2[i]
				ti[i].innerHTML = left1[i]
				lunbo[i].innerHTML = lun4[i]

				if (i <= 4) {
					pian[i].src = zi[i]
				} else {
					var pian1 = document.querySelectorAll(".guang")
					pian1[i].style.display = "none"
				}
			}
			list1.innerHTML = list
			var page = 0
			var pg = []
			var lu = document.querySelectorAll(".gong .gong_center .xuan .yuding .ka")
			var dianright = document.querySelectorAll(".gong .gong_center .xuan .yuding .right")
			var dianleft = document.querySelectorAll(".gong .gong_center .xuan .yuding .left")
			var wan = document.querySelectorAll(".gong .gong_center .xuan .yuding .dian3")
			var xb=document.querySelectorAll(".gong .gong_center .xuan .yuding .xiaob1")
			var wan1 = []
			for (let i = 0; i < lu.length; i++) {
				var luni = lu[i].getElementsByTagName("li")
				var wan2 = wan[i].getElementsByTagName("li")
				pg.push(luni)
				wan1.push(wan2)
				wan1[i][0].style.background = "#070d41"
				for (let j = 0; j < luni.length; j++) {
					if (luni.length == 1) {
						luni[0].className = "top"
					} else if (luni.length == 2) {
						luni[0].className = "top"
						luni[1].className = "middle"
					} else {
						luni[0].className = "top"
						luni[1].className = "middle"
						luni[2].className = "buttom"
					}
				}
				for (let m = 0; m < pg[i].length; m++) {
					dianright[i].onclick = function() {
						page++
						if (page == 3) {
							page = 0
						}
						if (pg[i].length == 1) {
							pg[i][0].className = "top"
							wan1[i][0].style.background = "#070d41"
						} else if (pg[i].length == 2) {
							pg[i][page % 2].className = "top"
							pg[i][(page + 1) % 2].className = "middle"
							for (let v = 0; v < wan1[i].length; v++) {
								wan1[i][v].style.background = ""
							}
							wan1[i][page % 2].style.background = "#070d41"
						} else if(pg[i].length == 3){
							pg[i][page % 3].className = "top"
							pg[i][(page + 1) % 3].className = "middle"
							pg[i][(page + 2) % 3].className = "buttom"
							for (let v = 0; v < wan1[i].length; v++) {
								wan1[i][v].style.background = ""
							}
							wan1[i][page%3].style.background = "#070d41"
						}
					}
				}
				for (let b = 0; b < pg[i].length; b++) {
					dianleft[i].onclick = function() {
						page--
						if (page < 0) page = pg[i].length - 1
						if (pg[i].length == 1) {
							pg[i][0].className = "top"
							wan1[i][0].style.background = "#070d41"
							xb[i].innerHTML=data[8].son[0]
						} else if (pg[i].length == 2) {
							pg[i][page % 2].className = "top"
							pg[i][(page + 1) % 2].className = "middle"
							wan1[i][page].style.background = "#070d41"
							for (let v = 0; v < wan1[i].length; v++) {
								wan1[i][v].style.background = ""
							}
							wan1[i][page].style.background = "#070d41"
						} else {
							pg[i][page % 3].className = "top"
							pg[i][(page + 1) % 3].className = "middle"
							pg[i][(page + 2) % 3].className = "buttom"
							for (let v = 0; v < wan1[i].length; v++) {
								wan1[i][v].style.background = ""
							}
							wan1[i][page].style.background = "#070d41"
						}
					}
				}

			}
			var xuan=document.querySelectorAll(".gong .gong_center .xuan")
			var temr1 = setInterval(function() {
				dianright[0].click()
			}, 3000)
			var temr2 = setInterval(function() {
				dianright[1].click()
			}, 3000)
			var temr3 = setInterval(function() {
				dianright[2].click()
			}, 3000)
			var temr4 = setInterval(function() {
				dianright[3].click()
			}, 3000)
			var temr5 = setInterval(function() {
				dianright[5].click()
			}, 3000)
				xuan[0].onmouseenter=function(){
					clearInterval(temr1)
				}
				xuan[1].onmouseenter=function(){
					clearInterval(temr2)
				}
				xuan[2].onmouseenter=function(){
					clearInterval(temr3)
				}
				xuan[3].onmouseenter=function(){
					clearInterval(temr4)
				}
				xuan[5].onmouseenter=function(){
					clearInterval(temr5)
				}
				xuan[0].onmouseleave=function(){
					temr1=setInterval(function(){
						dianright[0].click()
					},3000)
				}
				xuan[1].onmouseleave=function(){
					temr2=setInterval(function(){
						dianright[1].click()
					},3000)
				}
				xuan[2].onmouseleave=function(){
					temr3=setInterval(function(){
						dianright[2].click()
					},3000)
				}
				xuan[3].onmouseleave=function(){
					temr4=setInterval(function(){
						dianright[3].click()
					},3000)
				}
				xuan[5].onmouseleave=function(){
					temr1=setInterval(function(){
						dianright[5].click()
					},3000)
				}
		})
	})

	// 固定
	var bai = document.querySelector(".bai")
	var dading = document.querySelector(".dading")
	bai.onclick = function() {
		document.documentElement.scrollTop = document.body.scrollTop = 0
		document.body.scrollTo(0,100)
	}
	dading.style.display = "none"
	document.addEventListener('scroll', function() {
		var top = document.documentElement.scrollTop
		if (top >= 200) {
			dading.style.display = "block"
		} else {
			dading.style.display = "none"
		}
	})
	var gao=document.querySelector(".gao")
	gao.style.display='block'
	window.addEventListener("scroll",function(){
		var sf=document.documentElement.scrollTop
		setTimeout(()=>{
			var sw=document.documentElement.scrollTop
			if (sf>sw) {
				gao.style.display='block'
			}else{
				gao.style.display='none'
			}
		},1000)
	})
}

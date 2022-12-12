// JavaScript Document
function perandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pengacakan(bek) {
	var o = bek?.length,
		j, temp;
	if (o === 0) return false;
	while (--o) {
		j = Math.floor(Math.random() * (o + 1));
		temp = bek[o];
		bek[o] = bek[j];
		bek[j] = temp;
	}
	return bek;
}

function animate_scroll(element, offset) {
	$('html, body').stop().animate({
		scrollTop: $(element).offset().top - offset
	}, 1000);
}

function isEmpty(el) {
	return !$.trim(el.html())
}

function replyTo(id) {
	var sumberAsalKomen = $('#comment-editor').attr('src').split('&'),
		undoan = $('#a-undo'),
		bundoan = $('#b-undo'),
		wadahKomenBox = $('#comment-editor'),
		wadahKomen = $('#bud-comment-form'),
		komenLokBales = $('#comup' + id),
		container = id ? $('#c' + id) : $('#bud-comments'),
		komenLokAsal = $('#commentin'),
		bagianSumber = sumberAsalKomen,
		partFalse = bagianSumber[0] + '&' + bagianSumber[1] + '&' + bagianSumber[2] + '&' + bagianSumber[3],
		partTrue = partFalse + '&parentID=' + id;
	undoan.css('display', id == 0 ? 'none' : 'inline-block');
	bundoan.css('display', id == 0 ? 'none' : 'block');
	wadahKomenBox.css('visibility', 'hidden');
	wadahKomenBox.attr('src', id ? partTrue : partFalse);
	wadahKomen.insertAfter(id ? komenLokBales : komenLokAsal);
	$('html, body').animate({
		scrollTop: wadahKomenBox.offset().top - 300
	}, 1000);
	wadahKomenBox.on('load', function() {
		$(this).css('visibility', 'visible');
	});
}
var pumanjang = $('#papanjang').val();
fetch('https://api-ssl.bitly.com/v4/shorten', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer 0cfdbf7f35dd3347c9544014e683abfb2deee58f',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"long_url": pumanjang,
			"domain": "bit.ly"
		})
	})
	.then((response) => response.json())
	.then((json) => {
		var pependek = json.id;
		console.log(pependek);
		$('#budpendekan').html('https://' + pependek);
	});

function onSubmit(token) {
	$('#budkontak-form').submit();
}
var vidsal = $('#asalvid').html(),
	vidcon = $('#video-place');
vidcon.html(vidsal);
vidsal.html('');
const titipe = $('#tumipe').val();
var al = {
	'gl': {
		'lc': window.location.href,
		'ad': 'https://budkanote.blogspot.com',
		'mpt': ':empty',
		'ckc': ':checked',
		'ktn': 'https://placekitten.com/g/'
	},
	'rl': {
		'rf': $('span#bud-kerelated'),
		'rfatr': 'data-relatedan',
		'kn': $('#posnya-relatedan'),
		'tm': [100, 100],
		'mx': 5,
		'num': 140
	},
	'ps': {
		'pb': $(".post-body"),
		'wc': $(".etan"),
		'tc': $(".etam"),
		'wpm': 230,
		'wrd': [' kata', 'kurang dari semenit', 'sekitar semenit', ' menit', 'konten kosong!'],
		'fID': 'catfoot',
		'ft': $('.catkaki'),
		'pft': 'ref',
		'pff': 'cat',
		'clc': 'footklik',
		'skf': $('<hr><ol id="' + this.fID + '"></ol>')
	},
	'sr': {
		't0': $('#r-car-0'),
		'rc': $("input[data-usul='r']"),
		'rcp': 'input[data-usul="r"]',
		'cb': '#carimana :checkbox',
		'scfr': $("#bud-searchform"),
		'bsc': $("#bud-search-input"),
		'bcr': $('#carivalue'),
		'lbn': 'label:note',
		'lbt': 'label%3A',
		'nvms': $('.mss .search-query'),
		'rgxlbl': '/((\slabel:\w*)|(label:\w*))/g'
	},
	'cmn': {
		'bd': $('.comment-body'),
		'bdp': '.comment-body',
		'rkm': 'div.refkom',
		'cff': 'comref-footer',
		'kcp': ['Waduh, kayaknya komentar ini mengandung link/tautan... jadi komentarnya disembunyikan.'],
		'spm': 'komenspam',
		'trf': 'toref',
		'cls': 'closeref',
		'cfr': 'comreflink',
		'rpcls': 'repcomclosed',
		'rpc': 'repcom',
		'hdr': 'hiddenrep',
		'imgsz': 800
	}
};

if (titipe) {
	(function($) {
		//ngitung kecap
		var cntW = al.ps.pb.text().split(" ");
		for (var i = 0; i < cntW.length; i++) {
			while (cntW[i] === "") {
				cntW.splice(i, 1);
			}
		}
		al.ps.wc.text(cntW.length.toString().replace(RegExp(/\B(?=(\d{3})+(?!\d))/g), '.') + al.ps.wrd[0]);
		//ngitung waktu maca
		var lenW = al.ps.pb.text().trim().split(/\s+/g).length,
			lmbc = Math.round(lenW / al.ps.wpm);
		if (lenW != 0) {
			al.ps.tc.html((lmbc < 1) ? al.ps.wrd[1] : ((lmbc < 1) ? al.ps.wrd[2] : lmbc + ' ' + al.ps.wrd[3]));
		} else {
			al.ps.tc.html(al.ps.wrd[4]);
		}
		//FOOTNOTE
		var sdrl = $('<ol id="' + al.ps.fID + '"></ol>');
		al.ps.pb.append(sdrl);
		al.ps.ft.each(function(index) {
			var idx = index + 1,
				hcf = al.ps.pff + idx,
				hsf = al.ps.pft + idx,
				txf = $(this).text().replace(RegExp(/\—/g), ''),
				ctf = $('<li><a class="' + al.ps.clc + '" href="#' + hsf + '" id="' + hcf + '">' + txf + '</a></li>');
			sdrl.append(ctf);
			$(this).html('<a class="' + al.ps.clc + '" href="#' + hcf + '" id="' + hsf + '">[' + (idx) + ']</a>');
		});
		$('<hr>').insertBefore(sdrl);
		$('a.' + al.ps.clc).on('click', function() {
			var tar = $(this).attr('href'),
				jar = '#' + $(this).attr('id');
			animate_scroll(tar, 110);
			$(tar).addClass('infoc');
			$('a.' + al.ps.clc).not($(tar)).removeClass('infoc');
			//			console.log(jar + ' => ' + tar);
		});
		if ($('#' + al.ps.fID).is(':empty')) {
			$('#' + al.ps.fID).prev().remove();
		}
		$.ajax({
			url: al.gl.ad + '/feeds/posts/summary/-/' + al.rl.rf.attr(al.rl.rfatr) + '?alt=json-in-script&max-results=' + al.rl.mx,
			type: 'get',
			dataType: 'jsonp',
			success: function(json) {
				var sutartoNya = 1;
				$.ajax({
					url: al.gl.ad + '/feeds/posts/summary/-/' + al.rl.rf.attr(al.rl.rfatr) + '?alt=json-in-script&start-index=' + sutartoNya + '&max-results=' + al.rl.mx,
					type: 'get',
					dataType: 'jsonp',
					success: function(json) {
						var entry = pengacakan(json.feed.entry),
							link, rlsm, rlimg, skrl = "",
							tnw = al.gl.lc.split('#'),
							tnww = tnw[0].split('?');
						if (typeof entry !== "undefined") {
							skrl = '<h4><i class="fa-solid fa-layer-group"></i> Pos sejenis</h4><ul class="bitter">';
							for (var i = 0; i < entry.length; i++) {
								for (var j = 0; j < entry[i].link.length; j++) {
									if (entry[i].link[j].rel == "alternate") {
										link = entry[i].link[j].href;
									}
								}
								rlimg = ("media$thumbnail" in entry[i]) ? '<img alt="" src="' + entry[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/, '/w' + al.rl.tm[0] + '-h' + al.rl.tm[1] + '-p') + '" width="' + al.rl.tm[0] + '" height="' + al.rl.tm[1] + '">' : '<img alt="" src="' + al.gl.ktn + al.rl.tm[1] + '/' + al.rl.tm[0] + '" width="' + al.rl.tm[0] + '">';
								rlsm = ("summary" in entry[i]) ? entry[i].summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
								rlsm = rlsm.length > al.rl.num ? rlsm.substring(0, al.rl.num) + '&hellip;' : rlsm;
								if (link.includes(tnww[0])) {} else {
									skrl += '<li class="bitter"><a href="' + link + '" title="' + entry[i].title.$t + '"><div class="relaimg">' + rlimg + '</div><div class="relasum"><div class="relajud">' + entry[i].title.$t + '</div><div class="summary">' + rlsm + '</div></div></a></li>';
								}
							}
							skrl += '</ul>';
							al.rl.kn.html(skrl);
						} else {
							al.rl.kn.html('<div>Tidak ada pos terkait kategori "' + al.rl.rf.attr(al.rl.rfatr) + '".</div>');
						}
					},
					error: function() {
						al.rl.kn.html('');
					}
				});
			},
			error: function() {
				al.rl.kn.html('');
			}
		});
	})(jQuery);
}
$(function() {
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.not('.allow')
		.not('.footklik')
		.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	al.sr.t0.click(function() {
		al.sr.rc.prop('checked', $(this).prop('checked'));
	});

	al.sr.rc.click(function() {
		if (!$(this).prop('checked')) {
			al.sr.t0.prop('checked', false);
		}
		if ($(al.sr.rcp + ":not(:checked)").length == 0) {
			al.sr.t0.prop('checked', true);
		}
	});
	al.sr.scfr.submit(function() {
		var bib = al.sr.bsc,
			bih = al.sr.bcr;
		if ($(al.sr.cb + ':not(:checked)').length == 0) {
			var snlb = al.sr.lbn;
		} else if ($(al.sr.cb + ':checked').length == 0) {
			var snlb = al.sr.lbn;
		} else {
			var drtn = [];
			$.each($(al.sr.rcp + ":checked"), function() {
				drtn.push($(this).val());
			});
			var snlb = drtn.join("|");
		}

		//budInputanHidden.val(senaraiLabel);
		bib.attr('name', '');
		bih.attr('name', 'q');
		var wara = bib.val().replace(RegExp(al.sr.rgxlbl), '') + " " + snlb;
		bih.val("" == bib.val() ? "" : wara);
	});
	var prtlc = al.gl.lc.split('label%3A'),
		arlb = [],
		sklb = '';
	for (let i = 1; i < prtlc.length; i++) {
		var lbt1 = prtlc[i].split('&'),
			lbt2 = lbt1[0].split('%7C'),
			tgllb = decodeURI(lbt2[0]);
		//	$('#jokol').append(tagPelabelan);
		arlb.push(tgllb);
	}
	for (let i = 0; i < arlb.length; i++) {
		var arlbl1 = i < arlb.length - 1 ? (i < arlb.length - 2 ? ', ' : (arlb.length == 2 ? ' dan ' : ', dan ')) : '';
		sklb += arlb[i] + arlbl1;
	}
	//$('#jokol').append(rangkaPelabelan);
	var sus = al.sr.nvms.text().includes('label:note') ? true : false;
	var edtmss = '<span class="idom">' + al.sr.nvms.text().replace(RegExp(/((\slabel:\w*)|(label:\w*))/g), '').replace(RegExp(/\|*/g), '').replace(RegExp(/\+*/g), '') + '</span>' + (!sus ? ' dalam kategori ' + sklb.replace('dll', 'lainnya') : '');
	al.sr.nvms.html(edtmss);

	al.cmn.bd.each(function() {
		var skkm = $(this).html().replace(/\[tawut\](.*?)\[\/tawut\]/ig, "<a target='_blank' href='$1' title='tautan' rel='nofollow' data-allow='true'>$1<\/a>");
		skkm = skkm.replace(/\[toref\](.*?)\[\/toref\]/ig, "<a data-href='$1' title='Referensi komentar' rel='nofollow' data-allow='true' class='" + al.cmn.trf + "'>$1<\/a>");
		skkm = skkm.replace(/\_\_(.*?)\_\_/ig, "<strong>$1<\/strong>");
		skkm = skkm.replace(/\*\*(.*?)\*\*/ig, "<em>$1<\/em>");
		skkm = skkm.replace(/\[img\](.*?)\[\/img\]/ig, "<span style='text-align:center;'><a href='$1' data-allow='true' class='allow' target='_blank' rel='nofollow'><img title='Gambar referensi' class='cm-image' src='$1' alt='Memuat...' \/><\/a><\/span>");
		skkm = skkm.replace(/\[youtube\](.*?)\[\/youtube\]/ig, "<span class='cm-youtube'><iframe frameborder='0' allow='autoplay; encrypted-media' allowfullscreen src='http://www.youtube.com/embed/$1'><\/iframe><\/span>");
		skkm = skkm.replace(/\/((w|s|h)[0-9]+\-(c|p|cc)|(w|s|h)[0-9]+(|\-(c|p|cc)))/ig, ("/s" + al.cmn.imgsz + "-c"));
		skkm = skkm.replace(/\[h\](.*?)\[\/h\]/ig, "<strong class='comh comh1'>$1<\/strong>");
		skkm = skkm.replace(/\[hh\](.*?)\[\/hh\]/ig, "<strong class='comh comh2'>$1<\/strong>");
		skkm = skkm.replace(/\[hhh\](.*?)\[\/hhh\]/ig, "<strong class='comh comh3'>$1<\/strong>");
		$(this).html(skkm);
		if ($(this).has('a.' + al.cmn.trf)) {
			$(this).append('<div class="refkom"></div><div style="display:none" class="' + al.cmn.cff + ' bitter"><div class="' + al.cmn.cls + ' bit-6"><i class="fa-regular fa-rectangle-xmark"></i></div></div>');
		}
		$(this).children('.comh').each(function(index) {
			var cidx = index + 1,
				idpar = $(this).parent().parent().attr('id'),
				hcon = $(this).html(),
				hconp = hcon.split(' ');
			$(this).attr('id', idpar + '-h-' + cidx);
		});
	});
	$(al.cmn.bdp + ':has(a:not([data-allow="true"]))').each(function() {
		$(this).parent().parent().addClass(al.cmn.spm);
		$(this).html(al.cmn.kcp[0]);
	});
	$(al.cmn.bdp + ' a.toref').on('click', function() {
		$(this).toggleClass('torefopen');
		var cnmrf = $(this).attr('data-href'),
			cnmsrc = (cnmrf.includes(al.gl.ad) ? '' : al.gl.ad) + cnmrf,
			cmnrfID = cnmrf.split('#'),
			cntrf = $(this).parent().find(al.cmn.rkm),
			kaComref = $(this).parent().find('div.' + al.cmn.cff).children('.' + al.cmn.cfr);
		cntrf.empty();
		cntrf.next().css('display', 'none');
		kaComref.remove();
		if (isEmpty(cntrf)) {
			$.get(cnmsrc, {}, function(data) {
				cntrf.html($(data).find('#' + cmnrfID[1] + ' .comup').html());
				$(al.cmn.rkm + ' .comment-footer').remove();
				$(al.cmn.rkm + ' a.' + al.cmn.trf).unwrap();
				cntrf.next().css('display', 'block');
				cntrf.next().append('<div class="' + al.cmn.cfr + ' bit-6"><a target="_blank" href="' + cnmrf + '" data-allow="true"><i class="fa-solid fa-up-right-from-square"></i></a></div>');
				//wadahRefkomnya.append('<div class="comreflink">kunjungi: ');
				$(al.cmn.rkm + ' ' + al.cmn.bdp).each(function() {
					var skkr = $(this).html().replace(/\[tawut\](.*?)\[\/tawut\]/ig, "<em>$1<\/em>");
					skkr = skkr.replace(/\[toref\](.*?)\[\/toref\]/ig, "<em>$1<\/em>");
					skkr = skkr.replace(/\_\_(.*?)\_\_/ig, "<strong>$1<\/strong>");
					skkr = skkr.replace(/\[img\](.*?)\[\/img\]/ig, "<span style='text-align:center;'><a data-allow='true' href='$1' class='allow' target='_blank' rel='nofollow'><img title='Gambar referensi' class='cm-image' src='$1' alt='Memuat...' \/><\/a><\/span>");
					skkr = skkr.replace(/\[youtube\](.*?)\[\/youtube\]/ig, "<span class='cm-youtube'><iframe frameborder='0' allow='autoplay; encrypted-media' allowfullscreen src='http://www.youtube.com/embed/$1'><\/iframe><\/span>");
					skkr = skkr.replace(/\/((w|s|h)[0-9]+\-(c|p|cc)|(w|s|h)[0-9]+(|\-(c|p|cc)))/ig, ("/s" + al.cmn.imgsz + "-c"));
					skkr = skkr.replace(/\[h\](.*?)\[\/h\]/ig, "<strong class='comh1'>$1<\/strong>");
					skkr = skkr.replace(/\[hh\](.*?)\[\/hh\]/ig, "<strong class='comh2'>$1<\/strong>");
					skkr = skkr.replace(/\[hhh\](.*?)\[\/hhh\]/ig, "<strong class='comh3'>$1<\/strong>");
					$(this).html(skkr);
				});
				$(al.cmn.rkm + ' ' + al.cmn.bdp + ':has(a:not([data-allow="true"]))').each(function() {
					$(this).parent().addClass(al.cmn.spm);
					$(this).html(al.cmn.kcp[0]);
				});
			}, "html");
			cntrf.html('<div class="comref-loading"><i class="fa-solid fa-sync fa-spin"></i></div>');
		}
		return false;
	});

	$('.' + al.cmn.cls).each(function() {
		$(this).on('click', function() {
			var rffr = $(this).parent().parent().find(al.cmn.rkm);
			rffr.empty();
			$(this).parent().css('display', 'none');
			$(this).next().remove();
			return false;
		});
	});
	$('.' + al.cmn.rpc).on('click', function() {
		var cntrf = $(this).attr('data-trigger'),
			nkrpl = $('#' + cntrf);
		$(this).toggleClass(al.cmn.rpcls);
		nkrpl.slideToggle(500);
		nkrpl.next().fadeToggle(500);
		nkrpl.prev().toggleClass(al.cmn.rpcls);
		return false;
	});
	$('.' + al.cmn.hdr).on('click', function() {
		$(this).prev().slideToggle(500);
		$(this).fadeToggle(500);
		$(this).prev().prev().toggleClass(al.cmn.rpcls);
		return false;
	});
	$('.' + al.cmn.rpc).hover(function() {
		var cntrf = $(this).attr('data-trigger'),
			nkrpl = $('#' + cntrf);
		nkrpl.toggleClass('humover', 500);
		return false;
	});
});
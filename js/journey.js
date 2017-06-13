//轮播图
$('.swiper-container').swiper({
	autoplay : 4000,
	speed:1500,
	effect:'fade',
	autoplayDisableOnInteraction : false,
	loop : true
});


var _townList = {};
var town_list = new AV.Query('dx_area');
town_list.find().then(function(res){
	_townList.list = res;
	console.log(res);
	//大兴小镇列表
	var tpl = '{{#each list}}<a class="weui-cell weui-cell_access" href="journey_list.html?{{this.id}}"><div class="weui-cell__bd">'+'<p> <span class="">{{this.attributes.name}}</span></p></div><div class="weui-cell__ft"></div></a>{{/each}}';
	var compiledTemplate = $.Template7.compile(tpl);
	var html = compiledTemplate(_townList);
	$('#town_list').append(html);
}).then(function(){
	$youziku.load("body", "4717ecb8f3de4def83b0b80fb9d9ef89", "jdlibianjian");
	$youziku.draw();
});





//旅游线路列表
var tpl1 = '{{#each journey}}<a href="journey_detail.html?{{this.id}}" class="weui-media-box weui-media-box_appmsg"><div class="weui-media-box__bd"><h5 class="weui-media-box__title">{{this.name}}</h5><p class="weui-media-box__desc">{{this.info}}</p></div></a>{{/each}}';

var journeyObj = {};
$(function(){
	$.getJSON('data/journey.json',function(json,textStatus){
		journeyObj = json.journey;
		//console.log(journeyObj);
		var compiledTemplate = $.Template7.compile(tpl1);
		var html = compiledTemplate(json);
		$('#list_journey').append(html);

		//旅游详情页数据
			var oid = location.search.replace("?",""),
				journeyDetail = {},
				journeyDetailTpl = $('#journey_detail').html();
			$.each(journeyObj,function(i,v){
				if(journeyObj[i].id == oid){
					journeyDetail =  journeyObj[i];
					console.log(journeyDetail);

					var compiledTemplate1 = $.Template7.compile(journeyDetailTpl);
					var html1 = compiledTemplate1(journeyDetail);
					$('.journey_detail').append(html1);
				}
			});
	}).then(function(){
		$youziku.load("body", "4717ecb8f3de4def83b0b80fb9d9ef89", "jdlibianjian");
		$youziku.draw();
	});


	//// 区域的对象
	//var dx_area = AV.Object.createWithoutData('dx_area', '58fd78e61b69e600589f29fc');
	//
	//// 区域的路线
	//var dx_journey_1 = AV.Object.createWithoutData('dx_journey', '58fda90a8d6d8100589bcee9');
	//dx_journey_1.set('inArea', dx_area); // 指向区域
	//
	//var list = [dx_journey_1];
	//
	//AV.Object.saveAll(list).then(function () {
	//	var relation = dx_area.relation('ownJourney'); // 创建 AV.Relation
	//	list.map(relation.add.bind(relation));
	//	return dx_area.save();// 保存到云端
	//}).then(function(res) {
	//	console.log(res);
	//	// 保存成功
	//}, function (error) {
	//	// 异常处理
	//}).catch(function (err) {
	//	console.log(err)
	//});

	// 单个查询
	//var Journey = new AV.Query('dx_journey');
	//Journey.include('inArea');
	//Journey.get('58fda90a8d6d8100589bcee9')
	//	.then(function (res) {
	//		console.log(res)
	//	});

	// 区域下所有线路
	//var area = AV.Object.createWithoutData('dx_area', '58fd78e61b69e600589f29fc');
	//var relation = area.relation('ownJourney');
	//var query = relation.query();
	//query.include('inArea');
	//query.find().then(function (results) {
	//	console.log(results);
	//	// results 是一个 AV.Object 的数组，它包含所有当前 todoFolder 的 tags
	//}, function (error) {
	//});








	//$.getJSON('data/name.json', function(json, textStatus) {
	//	/*optional stuff to do after success */
	//	console.log(json);
	//	var compiledTemplate = $.Template7.compile(tpl1);
	//	var html = compiledTemplate(json);
	//	$('#list_journey').append(html);
	//});

});



















<script>
	var language = "en";
	var languageTypeCodeSelected = "vi-VN";
	var speakerSelected = "3";
	var speakerDefault = "Chọn giọng nói";
	var ES_TA_TOKEN = "d1ec1782906d8ec02e49e9d771e75b17";
	var ES_TA_CONTENT = "2-644";
	var loadingItem = '<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>';
	var lineMaxOfPage = "100";
	var amountOfSpeaker = 7;
	var subReadTryCount = 30;
	var speed = "1";
	var pitch = "0";
	var path_mp3_sample = "https://storage.googleapis.com/t-speaker/Resources/";
	var newCreate = 1;
		var subChangeArray = {};
	var processTime = 3000;
	var speakGroup = {"vi-VN":["","","","","","(*)","(*)"]};var languageTypeCode = {"vi-VN":[{"stt":"7","stt2":"0","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"","speakerName":"Ch\u1ecdn gi\u1ecdng n\u00f3i","sex":"","company":"","speakGroup":"","sample":"","isRemove":"0","updateTime":"2021-07-25 12:15:27"},{"stt":"4","stt2":"1","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"vi-VN-Wavenet-D","speakerName":"Gi\u1ecdng \u1ea5m, tr\u1ea7m","sex":"Nam","company":"google","speakGroup":"","sample":"B\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o ra gi\u1ecdng n\u00f3i nh\u00e2n t\u1ea1o t\u1eeb m\u1ed9t \u0111o\u1ea1n v\u0103n b\u1ea3n, ho\u1eb7c t\u1eeb ph\u1ee5 \u0111\u1ec1 c\u00f3 s\u1eb5n.\r\nV\u00e0 c\u00f3 th\u1ec3 xu\u1ea5t ra file ph\u1ee5 \u0111\u1ec1 \u1ee9ng v\u1edbi file \u00e2m thanh \u0111\u00f3. Ph\u00f9 h\u1ee3p \u0111\u1ec3 t\u1ea1o gi\u1ecdng n\u00f3i, hay ph\u1ee5 \u0111\u1ec1 trong video youtube, hay l\u00e0m thuy\u1ebft minh ph\u1ee5 \u0111\u1ec1 cho phim c\u1ee7a m\u00ecnh.","isRemove":"0","updateTime":"2021-07-25 12:04:32"},{"stt":"1","stt2":"2","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"vi-VN-Wavenet-A","speakerName":"Gi\u1ecdng \u1ea5m, tr\u1ea7m","sex":"N\u1eef","company":"google","speakGroup":"","sample":"","isRemove":"0","updateTime":"2021-07-25 12:04:07"},{"stt":"2","stt2":"3","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"vi-VN-Wavenet-B","speakerName":"Gi\u1ecdng cao, thanh","sex":"Nam","company":"google","speakGroup":"","sample":"","isRemove":"0","updateTime":"2021-07-25 12:04:07"},{"stt":"3","stt2":"4","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"vi-VN-Wavenet-C","speakerName":"Gi\u1ecdng cao, thanh","sex":"N\u1eef","company":"google","speakGroup":"","sample":"","isRemove":"0","updateTime":"2021-07-25 12:04:32"},{"stt":"6","stt2":"5","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"vi-VN-NamMinhNeural","speakerName":"(*)Gi\u1ecdng mi\u1ec1n t\u00e2y","sex":"Nam","company":"microsoft","speakGroup":"(*)","sample":"","isRemove":"0","updateTime":"2021-07-25 12:15:27"},{"stt":"5","stt2":"6","language":"vi","languageCode":"vi-VN","languageName":"Ti\u1ebfng Vi\u1ec7t","speakerCode":"vi-VN-HoaiMyNeural","speakerName":"(*)Gi\u1ecdng mi\u1ec1n t\u00e2y","sex":"N\u1eef","company":"microsoft","speakGroup":"(*)","sample":"","isRemove":"0","updateTime":"2021-07-25 12:15:27"}]};	var msg_js_home_alert_title_warring = "Warning !";
	var msg_js_home_alert_content_reload_mp3 = "Please 'Update Mp3' the mp3 file to listen !";
	var msg_js_home_alert_content_error_unknow = "An error has occurred. Please try again, or contact the administrator to be resolved as soon as possible.";
	var msg_js_home_alert_content_sub_select_option = "Please select the content to be processed";
	var msg_js_home_alert_sub_import_file_type = "Only .srt format supported";
	var msg_js_home_alert_sub_import_length_none = "Please choose the subtitle file";
	var msg_js_home_alert_sub_import_length_many = "Only 1 file can be processed";
	var msg_js_home_checkbox_speaker_time = "[speaker:x] Designate a speaker and wait time [wait:1s]";
	var msg_js_home_checkbox_time = "Add wait time at any position [wait:1s]";
	var msg_js_home_checkbox_speaker = "[speaker:x] Designate a speaker";
	var msg_js_home_text_placeholder = "Enter text here ...";
	var msg_js_home_alert_content_option_select = "Please select the content to be processed<br>　①Choose voice for each line<br>　②Listen to the First 30 Lines<br>　③Explain All";
	var msg_label_home_container_text_chatacter = "Count";
	var msg_label_home_container_text_convert = "Text to speech";
	var msg_label_home_container_text_new_convert = "Recreate From Scratch";
	var msg_label_home_convert_result = "Conversion Result";
	
	var msg_js_home_alert_title_info = "Notification !";
	var msg_js_home_alert_title_confirm = "Confirm !";
	var msg_js_home_alert_content_sub_select_defautl_speaker = "Please select the default voice for this subtitle.";
	var msg_js_home_alert_content_join_select_option = "Where do you want to insert this new text into the existing text ?";
	var msg_js_home_alert_content_join_select_option1 = "Head";
	var msg_js_home_alert_content_join_select_option2 = "Middle (Select Line)";
	var msg_js_home_alert_content_join_select_option3 = "End";
	var msg_js_home_alert_content_must_select_speaker = "You have to choose your speaker first !";
	var msg_js_home_alert_content_must_change_data = "You haven't changed anything yet !";
	var msg_js_home_alert_content_must_input_text = "Please enter the text first !";
	var msg_js_home_alert_content_must_select_input_position = "You must select the location where you want to insert the new text into the existing text.";
	var msg_js_home_alert_content_must_select_input_join_position = "Please select the position you want to insert between any 2 lines!";
	var msg_js_home_alert_content_sub_had_try = "Discovered that you have tried the first lines, do you want to listen again ?<br>OK : Listen to old data again<br>Cancel : Delete old data and convert from scratch";
	var msg_js_home_alert_content_process_stop = "Are you sure you want to stop converting subtitles 【[content]】 ?";
	var msg_js_home_alert_content_sub_convert_finish = "The subtitles of the version have been converted !<br>Do you want to see the voice over results right now ?";
	var msg_js_home_alert_content_process_stop_send = "Request to STOP conversion has been sent.<br>You can still continue converting with the remaining lines of the subtitles";
	var msg_js_home_alert_content_change_speaker_check = "You must not mix [giong] with other voices!";
	var msg_js_home_alert_sub_change_old_text_null = "Please enter the word you want to change when exporting subtitles";
	var msg_js_home_alert_content_recreate_confirm1 = "Do you really want to delete the data of lesson 【[contentName]】 to read from the beginning ?";
	var msg_js_home_alert_content_recreate_confirm2 = "If you want to read a new lesson, please change the subject of the current lesson.<br>The system will save your new lesson under the name of the new subject !";
	
</script>
<script src="/js/home_reader.js"></script>
<style>
	.col-3 {
		-ms-flex: 0 0 25%;
		flex: 0 0 25%;
		max-width: 25%;
	}
	.col-7 {
		-ms-flex: 0 0 58.333333%;
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
	.fa, .far, .fas {
		font-family: "Font Awesome 5 Free" !important;
	}
</style>
<!-- The Container -->
<div id="loadProcess" class="loadProcess displayNone">
	<div id="loadProcessName"></div>
	<div class="loader">
		<div class="progress-bar"><div class="progress-stripes"></div><div class="percentage">0%</div></div>
	</div>
	<div class="loadProcessButton"> 
		<div id="processSeeTry" content="" class="custom-btn btn-13 displayNone">Preview</div>
		<div id="processSuccessSee" content="" class="custom-btn btn-14 displayNone">View Results</div>
		<div id="processStop" content="" class="custom-btn btn-15 displayNone">Stop</div>
	</div>
</div>
<div id="container" class="container-reader">
	<!-- The Input -->
	<h3 id="text-1" style="text-align: center;margin-top: 20px; font-size: 25px;color: #333;"><a href="#selec">Enter Text - Import Subtitles</a></h3>
	<div class="input-container row">
		<div id="importFile" name="importFile" class="col-lg-4">
			<div class="speaker-container">
				<div id="speakerClps-btn" data-toggle="collapse" data-target="#speaker-contain">List of voices reading</div>
				<div id="speaker-contain" class="collapse show">
					<div class="speaker-content" ><a style="color:black;">1: Giọng ấm, trầm</a>（Nam）</div><audio style="height:30px;" controls="controls" src="https://storage.googleapis.com/t-speaker/Resources/vi-VN-1.mp3"></audio><div class="speaker-content" ><a style="color:black;">2: Giọng ấm, trầm</a>（Nữ）</div><audio style="height:30px;" controls="controls" src="https://storage.googleapis.com/t-speaker/Resources/vi-VN-2.mp3"></audio><div class="speaker-content" ><a style="color:black;">3: Giọng cao, thanh</a>（Nam）</div><audio style="height:30px;" controls="controls" src="https://storage.googleapis.com/t-speaker/Resources/vi-VN-3.mp3"></audio><div class="speaker-content" ><a style="color:black;">4: Giọng cao, thanh</a>（Nữ）</div><audio style="height:30px;" controls="controls" src="https://storage.googleapis.com/t-speaker/Resources/vi-VN-4.mp3"></audio><div class="speaker-content" ><a style="color:black;">5: (*)Giọng miền tây</a>（Nam）</div><audio style="height:30px;" controls="controls" src="https://storage.googleapis.com/t-speaker/Resources/vi-VN-5.mp3"></audio><div class="speaker-content" ><a style="color:black;">6: (*)Giọng miền tây</a>（Nữ）</div><audio style="height:30px;" controls="controls" src="https://storage.googleapis.com/t-speaker/Resources/vi-VN-6.mp3"></audio>				</div>
			</div>
			<div class="import-container">
					<div class="file-placeholder">
						<form id="importInput" name="importInput">
							<label></label>
							<input type="file" class="fileUpload" id="customFile" name="file_1" onclick="resetLog()">
							<div class="file-browse">
								<span class="file-browse-txt">Select Subtitle File</span>
								<span class="browse">Browse</span>
							</div>
						</div>
					</form>
					<input name="import-text-input" type="button" id="importBtn" value="Subtitle To Speech">
			</div>


		</div>
		<form id="input" action="" class="col-lg-8" style="border: 10px groove #31A9EE;">
			<div class="label-container displayNone">
				<label id="lab1" class="se-container" style="width: auto;display:none">Enter Text					<input type="checkbox" checked="checked" value="op1" disabled>
					<span class="checkmark"></span>
				</label>
				<label id="lab2" class="se-container" style="width: auto;">Have waiting time					<input id="op2" type="checkbox" value="op2">
					<span class="checkmark"></span>
				</label>
				<label id="lab3" class="se-container" style="width: auto;">Have designate speaker					<input id="op3" type="checkbox" value="op3">
					<span class="checkmark"></span>
				</label>
			</div>

			<div class="row col-12">
				<input id="content-name" style="background-color:#efefc4" onkeyup="displayConvertSplit()" value="Lesson 2 : ..." type="text" placeholder="Enter the subject...">
			</div>
			
			<div class="row" >
				<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">Speed : <span id="speedLabel">(×1)</span></label>
				<div class="col-7" style="position:relative;padding:0px;margin-top:3px;">
					<input style="width:100%;" type="range" id="id_speed"  min="0.3" max="4.0" step="0.1"  value="1" required="">
					<i class="fa fa-retweet fa-2x" style="position:absolute;right:-35px;top:0px;cursor:pointer;" onclick="resetValue('id_speed',1)"></i>
				</div>
			</div>
			<div class="row" style="position:relative;">
				<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">Pitch : <span id="pitchLabel">(0)</span></label>
				<div class="col-7" style="position:relative;padding:0px;margin-top:3px;">
					<input style="width:100%;"  type="range" id="id_pitch"  min="-200" max="200" value="0" required="">
					<i class="fa fa-retweet fa-2x" style="position:absolute;right:-35px;top:0px;cursor:pointer;" onclick="resetValue('id_pitch',0)"></i>
				</div>
			</div>
			<div class="row">
				<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">
					Language :</label>
				<select class="col-7" name="text_language" onchange="setLanguageTypeCode(this,'text',languageTypeCodeSelected,'3')" style="float:left;margin-left:0px;margin-top:0px;" required="">
					<option value="en-US">English (USA)</option><option value="en-GB">English (UK)</option><option value="en-AU">English (Australia)</option><option value="en-IN">English (India)</option><option value="hi-IN">Hindi (India)</option><option value="vi-VN" selected>Tiếng Việt</option><option value="ja-JP">日本語</option>				</select>
			</div>
			<div id="speaker0" class="row">
				<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">
					[speaker:1]</label>
				<select class="col-7 text_speaker"  style="float:left;margin-left:0px;margin-top:0px;">
					<script>nameSpkerArr.push("Giọng ấm, trầm（Nam）"); </script><option  value="1">Giọng ấm, trầm（Nam）</option><script>nameSpkerArr.push("Giọng ấm, trầm（Nữ）"); </script><option  value="2">Giọng ấm, trầm（Nữ）</option><script>nameSpkerArr.push("Giọng cao, thanh（Nam）"); </script><option selected value="3">Giọng cao, thanh（Nam）</option><script>nameSpkerArr.push("Giọng cao, thanh（Nữ）"); </script><option  value="4">Giọng cao, thanh（Nữ）</option><script>nameSpkerArr.push("(*)Giọng miền tây（Nam）"); </script><option  value="5">(*)Giọng miền tây（Nam）</option><script>nameSpkerArr.push("(*)Giọng miền tây（Nữ）"); </script><option  value="6">(*)Giọng miền tây（Nữ）</option>				</select>
					
			</div>
			<div id="speakers-select">
			</div>
			
			<div style="position:relative">
				<textarea onkeyup="countChar(this)" name="text-input" id="textarea-inp" cols="80" rows="7" placeholder="Enter text here ..." maxlength="auto"></textarea>
				<div class="custom-btn btn-3" onclick="changeSimulation(this)" id="changeSimulation" style="position:absolute;top:0px;right:0px;border-top-right-radius:7px;"><span style="margin-top:-3px;margin-left:7px;margin-right:3px;">Simulation sub ⬜</span></div>
				<div id="charNum" style="position:absolute;bottom:35px;height:10px;right:7px;">Count: 0</div>
			</div>
			<div id="playConvert">
				<input type="button" id="convert" value="Text to speech">
				<input type="button" class="displayNone" id="convertSplit" value="Join">
			</div>
		</form>
	</div>
	<div class="box_loading" style="display:none;" >
	</div>
	<!-- The Output -->
	<h3 id="text-2" class="displayNone" style="text-align: center;margin-top: 20px; font-size: 25px;color: #333;"><a href="#edit" id="edit_label">Conversion Result</a></h3>
	<div id="downloadArea" class="displayNone" style="text-align:center;">
		<div class="custom-btn btn-12" onclick="download('Mp3')"><span>Download !</span><span><i class="fa fa-play-circle"></i>&nbsp;Download MP3</span></div>&nbsp;
		<div class="custom-btn btn-12" onclick="download('Sub')"><span>Download  !</span><span><i class="fa fa-file"></i>&nbsp;Download Sub</span></div>
		<div style="margin-top:-10px;"><img class="sub_change_img_home" src="/image/sub_change.png" onclick="openModalChangeTextForSub(0)" width="50" height="50" alt="change_sub"></div>
	</div>
	
	
	
	<div id="output"  class="row displayNone" style="position:relative;">
		<select  name="countOfPage" onchange="changeCountOfPage(this)" style="position:absolute;right:-9px;bottom:-9px;background-color:#fafacc;z-index:1">
			<option value="5" >Lines/pages : 5</option><option value="10" >Lines/pages : 10</option><option value="20" >Lines/pages : 20</option><option value="30" >Lines/pages : 30</option><option value="50" >Lines/pages : 50</option><option value="100" selected>Lines/pages : 100</option>		
		</select>
		<form id="input-audio" style="display:none" class="col-lg-6 col-xl-5" action="CatMP3">
			<input id="contentNameText" type="text" disabled>
			<div id="main-audio" >
				<audio id="m-au" controls src="" >
				</audio>
				<div id="kara">
					<h5></h5>
				</div>
				<div id="refreshMp3" style="display:none;">&nbsp;<i class="fa fa-download fa-2x"></i><div style="padding-left:7px;font-size:17px;margin-bottom:0px;">Update Mp3</div></div>
			</div>
			<div id="listen-form">
				<div id="line-audio-container" style="display:flex;justify-content: center;">
					<div class="container-reader">
						<div id="line-audio-contain">
						</div>
					</div>
				</div>
			</div>

			<div id="pagination-container">
				<div id="readerPagination"></div>
			</div>
			
			<div id="subOnly-continue" class="displayNone">
				<input type="button" style="width: 100%;" id="sub_read_try" value="Listen to the First 30 Lines">
				<input type="button" style="width: 100%;" id="sub_read_all" value="Explain All">
			</div>
			<div id="subTry-continue" class="displayNone">
				<input type="button" style="width: 100%;" id="reload_sub_only" value="Review Subtitles">
				<input type="button" style="width: 100%;" id="sub_read_other" value="Explanation of the Remaining Lines">
			</div>
			<p></p>

		</form>
		<form id="subText" class="col-12" action="LayLinkMP3">
			<textarea readonly onkeyup="countChar(this)" class="" name="sub" id="text-sub" cols="20" rows="9" placeholder=""></textarea>
			<div class="clear"></div>
		</form>
	</div>
	
	<!-- History Content -->
	<div class="historyContent" >
		<h3>
			Voice Over History		</h3>
		<ul class="list-group">
			<li class="list-group-item" onclick=window.open("./?newCreate=0&content=1-844","_parent")><a>test000.srt</a>&nbsp;&nbsp;<a style="color:black;"></a></li>		</ul>
	</div>
	
	<!-- Phan chinh sua -->
	<div class="modal fade" id="myModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">

				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">Edit line</h4>
				</div>

				<!-- Modal body -->
				<form name="editForm" id="editForm">
					<div class="modal-body">
						<textarea name="text-input" id="edit" class="edit-text" cols="80" rows="6" placeholder="Enter text here ..." maxlength="auto"></textarea>
						<img class="sub_change_img"  src="/image/sub_change.png" onclick="openModalChangeTextForSub(244)" width="50" height="50" alt="change_sub">
						<div id="line-edit-container" style="display: inline-flex;margin-left: 11px;" class="edit-container">
							<div style="margin-top:11px;float:left;color:red;font-weight:bold;font-size:1.2em;">Timeout at the beginning :</div>
							<select id="damyTimeStart" name="damyTimeStart" onchange="setDamyTimeForTextArea('start',this.value)" style="height:30px;padding-top:3px !important;">
								<option value="0">0s</option>
								<option value="1">1s</option>
								<option value="2">2s</option>
								<option value="3">3s</option>
								<option value="4">4s</option>
								<option value="5">5s</option>
								<option value="6">6s</option>
								<option value="7">7s</option>
								<option value="8">8s</option>
								<option value="9">9s</option>
								<option value="10">10s</option>
							</select>
							<div style="margin-top:11px;float:left;color:red;font-weight:bold;font-size:1.2em;"> Timeout at the end :</div>
							<select id="damyTimeEnd" name="damyTimeEnd" onchange="setDamyTimeForTextArea('end',this.value)" style="height:30px;padding-top:3px !important;">
								<option value="0">0s</option>
								<option value="1">1s</option>
								<option value="2">2s</option>
								<option value="3">3s</option>
								<option value="4">4s</option>
								<option value="5">5s</option>
								<option value="6">6s</option>
								<option value="7">7s</option>
								<option value="8">8s</option>
								<option value="9">9s</option>
								<option value="10">10s</option>
							</select>
						</div>
						<br>
						
						<div class="rowX">
							<label class="col-3" style="margin-left:15px;margin-top:3px;color:red;font-weight:bold;font-size:1.2em;">
								Language :</label>
							<select class="col-7" name="edit_language" onchange="setLanguageTypeCode(this,'edit',lineArr[lineIdaffterClick].languageTypeCode,lineArr[lineIdaffterClick].speakerId)" style="float:left;margin-left:0px;margin-top:0px;" required="">
								<option value="en-US">English (USA)</option><option value="en-GB">English (UK)</option><option value="en-AU">English (Australia)</option><option value="en-IN">English (India)</option><option value="hi-IN">Hindi (India)</option><option value="vi-VN">Tiếng Việt</option><option value="ja-JP">日本語</option>							</select>
							<label class="col-3" style="margin-left:15px;margin-top:3px;color:red;font-weight:bold;font-size:1.2em;">
								Speaker :</label>
							<select class="col-7" name="edit_speaker" style="float:left;margin-left:0px;margin-top:0px;" required="">
								<option value="1">Giọng ấm, trầm（Nam）</option><option value="2">Giọng ấm, trầm（Nữ）</option><option value="3">Giọng cao, thanh（Nam）</option><option value="4">Giọng cao, thanh（Nữ）</option><option value="5">(*)Giọng miền tây（Nam）</option><option value="6">(*)Giọng miền tây（Nữ）</option>							</select>
						</div>
						
						<div class="rowX">
							<label class="col-3" id="speedTextLine" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">Speed : <span id="speedLabelLine">(×1)</span></label>
							
							<div class="col-7" id="id_speedLineRank" style="position:relative;padding:0px;margin-top:5px;">
								<input style="width:100%" type="range" id="id_speedLine"  min="0.3" step="0.1"  max="4.0" value="10" required="">
								<i class="fa fa-retweet fa-2x" style="position:absolute;right:-35px;top:-7px;cursor:pointer;" onclick="resetValue('id_speedLine',1)"></i>
							</div>
			
							<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">Pitch : <span id="pitchLabelLine">(0)</span></label>
							<div class="col-7" style="position:relative;padding:0px;margin-top:5px;">
								<input style="width:100%;"  type="range" id="id_pitchLine"  min="-200" max="200" value="0" required="">
								<i class="fa fa-retweet fa-2x" style="position:absolute;right:-35px;top:-7px;cursor:pointer;" onclick="resetValue('id_pitchLine',0)"></i>
							</div>
							<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">Volume : <span id="volumeLabelLine">(100)</span></label>
							<div class="col-7" style="position:relative;padding:0px;margin-top:5px;">
								<input style="width:100%;"  type="range" id="id_volumeLine"  min="25" max="130" value="100" required="">
								<i class="fa fa-retweet fa-2x" style="position:absolute;right:-35px;top:-7px;cursor:pointer;" onclick="resetValue('id_volumeLine',100)"></i>
							</div>
						</div>
						
						<div class="au-slide-container">
							<audio id="auEdit" controls="controls"></audio>
						</div>

						<div style="margin-top:15px; display:flex">
							<input id="tryListenBtn" type="button" value="Nghe thử">
							<input id="save-edit" type="button" value="Lưu">
						</div>
					</div>
				</form>
				
				

				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	<div class="clear"></div>
	<!-- Phan them sub_change -->
	<div class="modal fade" id="sub_changeModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div id="subChangeTextNewConverted" class="displayNone" ></div>
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">
						Convert Text For Subtitles<br>
						<a style="font-size:0.7em;color:black;">(Apply When Exporting Subtitles)</a>
					</h4>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
					<div style="display: flex;justify-content: center;justify-content: space-between;margin-bottom:3px;">
						<input type="text" class="subChangeText" id="subChangeTextOld" placeholder="Old Text">
						<i class="fa fa-arrow-right" style="margin:12px 13px 3px 13px;"></i>
						<input type="text" class="subChangeText" id="subChangeTextNew" placeholder="New Text">
					</div>
					<div style="text-align:center;">
						<button class="btn-99" id="subChangeAddButton" onclick="subChangeAdd()"><i class="fa fa-plus"></i> Add</button>
					</div>
					<div id="sub_change_text_list">
												
					</div>
				</div>

				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	
	<div class="clear"></div>
	
	<div class="modal fade" id="subModal">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<div class="modal-header">
					<h4 class="modal-title">Subtitle handling</h4>
				</div>

				<!-- Modal body -->
				<form name="editSubForm" id="editSubForm">
					<div class="modal-body">
						<textarea name="sub-input" id="sub-input" readonly class="edit-text" cols="80" rows="6"  maxlength="auto"></textarea>
						<br>
						
						<div class="rowX">
							<label class="col-3" style="margin-left:15px;margin-top:3px;color:red;font-weight:bold;font-size:1.2em;">
								Language :</label>
							<select class="col-7" name="sub_language" onchange="setLanguageTypeCode(this,'sub',languageTypeCodeSelected,speakerSelected)" style="float:left;margin-left:0px;margin-top:0px;" required="">
								<option value="en-US">English (USA)</option><option value="en-GB">English (UK)</option><option value="en-AU">English (Australia)</option><option value="en-IN">English (India)</option><option value="hi-IN">Hindi (India)</option><option value="vi-VN" selected>Tiếng Việt</option><option value="ja-JP">日本語</option>							</select>
							<label class="col-3" style="margin-left:15px;margin-top:3px;color:red;font-weight:bold;font-size:1.2em;">
								Speaker:</label>
							<select class="col-7" name="sub_speaker" style="float:left;margin-left:0px;margin-top:0px;" required="">
								<option  value="1">Giọng ấm, trầm（Nam）</option><option  value="2">Giọng ấm, trầm（Nữ）</option><option selected value="3">Giọng cao, thanh（Nam）</option><option  value="4">Giọng cao, thanh（Nữ）</option><option  value="5">(*)Giọng miền tây（Nam）</option><option  value="6">(*)Giọng miền tây（Nữ）</option>							</select>
						</div>
						
						<div class="rowX">
			
							<label class="col-3" style="margin-left:15px;margin-top:5px;color:red;font-weight:bold;font-size:1.2em;">Pitch : <span id="pitchLabelSub">(0)</span></label>
							<div class="col-7" style="position:relative;padding:0px;margin-top:5px;">
								<input style="width:100%;"  type="range" id="id_pitchSub"  min="-200" max="200" value="0" required="">
								<i class="fa fa-retweet fa-2x" style="position:absolute;right:-35px;top:-7px;cursor:pointer;" onclick="resetValue('id_pitchSub',0)"></i>
							</div>
							
						</div>
						
						<div style="margin-top:7px;display:flex;align-items: stretch;align-content: center;justify-content: center">
							<label class="container_radio">Choose voice for each line								<input type="radio" name="send_sub" value="sub_speaker_select">
								<span class="checkmark"></span>
							</label>
							<label class="container_radio">Listen to the First 30 Lines								<input type="radio" name="send_sub" value="sub_read_try">
								<span class="checkmark"></span>
							</label>
							<label class="container_radio">Explain All								<input type="radio" name="send_sub" value="sub_read_all">
								<span class="checkmark"></span>
							</label>
						</div>
						<div style="margin-top:15px; display:flex;align-items: center;flex-direction: column;justify-content: center;">
							<input id="sendSub" type="button" value="Send File">
						</div>
					</div>
				</form>

				<!-- Modal footer -->
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	</script>

<script src="/js/pagination_reader.js"></script>
<script  src="/js/countSuccess.js"></script>

					</div>
				</div>
			</section>
					<section class="hestia-contact contactus section-image" id="contact"
				data-sorder="hestia_contact" style="background-image: url(https://t-speaker.com/en/wp-content/themes/hestia/assets/img/contact.jpg);">
						<div class="container">
								<div class="row">
					<div class="col-md-5 hestia-contact-title-area" >
													<h2 class="hestia-title">Contact Info</h2>
																			<h5 class="description">support@t-speaker.com</h5>
												<div class="hestia-description"><div class="hestia-info info info-horizontal"><div class="icon icon-primary"><i class="fas fa-map-marker-alt"></i></div><div class="description"><h4 class="info-title"><span style="color: white">© 2021 T-Speaker. </span></h4><h4 class="info-title"><span style="color: white">All Rights Reserved.</span></h4></div></div></div>					</div>
											<div class="col-md-5 col-md-offset-2 hestia-contact-form-col" >
							<div class="card card-contact">
																	<div class="header header-raised header-primary text-center">
										<h4 class="card-title">Contact us</h4>
									</div>
																<div class="content">
									<div class="wpforms-container wpforms-container-full" id="wpforms-5"><form id="wpforms-form-5" class="wpforms-validate wpforms-form" data-formid="5" method="post" enctype="multipart/form-data" action="/en/" data-token="1d02b8123962ac09ebab19ca266a90cf"><noscript class="wpforms-error-noscript">Please enable JavaScript in your browser to complete this form.</noscript><div class="wpforms-field-container"><div id="wpforms-5-field_0-container" class="wpforms-field wpforms-field-name wpforms-one-half wpforms-first" data-field-id="0"><label class="wpforms-field-label wpforms-label-hide" for="wpforms-5-field_0">Name <span class="wpforms-required-label">*</span></label><input type="text" id="wpforms-5-field_0" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][0]" placeholder="Your Name" required></div><div id="wpforms-5-field_3-container" class="wpforms-field wpforms-field-email wpforms-one-half" data-field-id="3"><label class="wpforms-field-label wpforms-label-hide" for="wpforms-5-field_3">Email <span class="wpforms-required-label">*</span></label><input type="email" id="wpforms-5-field_3" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][3]" placeholder="Your Email" required></div><div id="wpforms-5-field_4-container" class="wpforms-field wpforms-field-text" data-field-id="4"><label class="wpforms-field-label wpforms-label-hide" for="wpforms-5-field_4">Subject</label><input type="text" id="wpforms-5-field_4" class="wpforms-field-large" name="wpforms[fields][4]" placeholder="Subject" ></div><div id="wpforms-5-field_2-container" class="wpforms-field wpforms-field-textarea" data-field-id="2"><label class="wpforms-field-label wpforms-label-hide" for="wpforms-5-field_2">Message <span class="wpforms-required-label">*</span></label><textarea id="wpforms-5-field_2" class="wpforms-field-medium wpforms-field-required" name="wpforms[fields][2]" placeholder="Your Message" required></textarea></div></div><div class="wpforms-submit-container"><input type="hidden" name="wpforms[id]" value="5"><input type="hidden" name="wpforms[author]" value="1"><input type="hidden" name="wpforms[post_id]" value="10"><button type="submit" name="wpforms[submit]" id="wpforms-submit-5" class="wpforms-submit" data-alt-text="Sending..." data-submit-text="Send message" aria-live="assertive" value="wpforms-submit">Send message</button></div></form></div>  <!-- .wpforms-container -->								</div>
							</div>
						</div>
										</div>
							</div>
					</section>
							<footer class="footer footer-black footer-big">
						<div class="container">
																<div class="hestia-bottom-footer-content"><ul id="menu-footer-menu-en" class="footer-menu pull-left"><li id="menu-item-112" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10 current_page_item menu-item-112"><a href="https://t-speaker.com/en/" aria-current="page">Home</a></li>
<li id="menu-item-117" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117"><a href="https://t-speaker.com/en/pricing/">PRICING</a></li>
<li id="menu-item-113" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="https://t-speaker.com/en/blog/">Blog</a></li>
<li id="menu-item-115" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"><a href="https://t-speaker.com/en/contact/">Contact</a></li>
<li id="menu-item-114" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-114"><a href="https://t-speaker.com/en/privacy-policy/">Privacy Policy</a></li>
</ul>					<div class="copyright pull-right">
				<a href="" target="" rel="nofollow">T-Speaker</a> | Design by  <a href="https://t-speaker.com/en" rel="nofollow">T-Speaker</a>			</div>
			</div>			</div>
					</footer>
				</div>
	</div>

<div class="xoo-el-container" style="visibility: hidden;">
    <div class="xoo-el-opac"></div>
    <div class="xoo-el-modal">
        <div class="xoo-el-inmodal">
            <span class="xoo-el-close xoo-el-icon-cancel-circle"></span>
            <div class="xoo-el-wrap">
                <div class="xoo-el-sidebar"></div>
                <div class="xoo-el-srcont">
                    <div class="xoo-el-main">
                        
<div class="xoo-el-form-container xoo-el-form-popup" data-active="login">

	
	
	
<div class="xoo-el-header">
	<ul class="xoo-el-tabs">

		<li data-tab="login" class="xoo-el-login-tgr">Login</li>

		 
			<li data-tab="register" class="xoo-el-reg-tgr">Sign Up</li>
		
	</ul>
</div>
	
	
			
		<div data-section="login" class="xoo-el-section">

			<div class="xoo-el-fields">

				<div class="xoo-el-notice"></div>
				<form class="xoo-el-action-form xoo-el-form-login">

					
					<div class="xoo-aff-group xoo-el-username_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon far fa-user"></span><input type="text" class="xoo-aff-required xoo-aff-text" name="xoo-el-username" placeholder="Username / Email"  value="" autocomplete="email" required="	"/></div></div><div class="xoo-aff-group xoo-el-password_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon fas fa-key"></span><input type="password" class="xoo-aff-required xoo-aff-password" name="xoo-el-password" placeholder="Password"  value="" required="	"/></div></div>
<div class="xoo-aff-group xoo-el-login-btm-fields">
	<label class="xoo-el-form-label">
		<input type="checkbox" name="xoo-el-rememberme" value="forever" />
		<span>Remember me</span>
	</label>
	<a class="xoo-el-lostpw-tgr">Forgot Password?</a>
</div>


<input type="hidden" name="_xoo_el_form" value="login">

<button type="submit" class="button btn xoo-el-action-btn xoo-el-login-btn" >Sign In</button>

<input type="hidden" name="xoo_el_redirect" value="/en/">
					
<div class="xoo-sl-container">

			<div class="xoo-sl-loginvia">
			<span>Or Login Using</span>
		</div>
	
	<div class="xoo-sl-btns-container">

		
			
			<div class="xoo-sl-social-btn xoo-sl-facebook-btn">

				<span class="xoo-sl-btn-icon xoo-sl-icon-facebook2"></span>

				<span class="xoo-sl-btn-txt">Facebook</span>

			</div>

		
			
			<div class="xoo-sl-social-btn xoo-sl-google-btn">

				<span class="xoo-sl-btn-icon xoo-sl-icon-google"></span>

				<span class="xoo-sl-btn-txt">Google</span>

			</div>

		
	</div>
	
</div>
				</form>

				
			</div>

		</div>

	
			
		<div data-section="register" class="xoo-el-section">

			<div class="xoo-el-fields">

				<div class="xoo-el-notice"></div>
				<form class="xoo-el-action-form xoo-el-form-register">

					
					
<div class="xoo-aff-fields"><div class="xoo-aff-group xoo-aff-cont-email one xoo-aff-cont-required xoo_el_reg_email_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon fas fa-at"></span><input type="email" class="xoo-aff-required xoo-aff-email" name="xoo_el_reg_email" placeholder="Email"  value="" autocomplete="email" required="	"/></div></div><div class="xoo-aff-group xoo-aff-cont-text onehalf xoo-aff-cont-required xoo_el_reg_fname_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon far fa-user"></span><input type="text" class="xoo-aff-required xoo-aff-text" name="xoo_el_reg_fname" placeholder="First Name"  value="" required="	"/></div></div><div class="xoo-aff-group xoo-aff-cont-text onehalf xoo-aff-cont-required xoo_el_reg_lname_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon far fa-user"></span><input type="text" class="xoo-aff-required xoo-aff-text" name="xoo_el_reg_lname" placeholder="Last Name"  value="" required="	"/></div></div><div class="xoo-aff-group xoo-aff-cont-password one xoo-aff-cont-required xoo_el_reg_pass_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon fas fa-key"></span><input type="password" class="xoo-aff-required xoo-aff-password" name="xoo_el_reg_pass" placeholder="Password"  value="" maxlength="20" minlength="6" autocomplete="new-password" required="	"/></div></div><div class="xoo-aff-group xoo-aff-cont-password one xoo-aff-cont-required xoo_el_reg_pass_again_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon fas fa-key"></span><input type="password" class="xoo-aff-required xoo-aff-password" name="xoo_el_reg_pass_again" placeholder="Confirm Password"  value="" autocomplete="new-password" required="	"/></div></div><div class="xoo-aff-group xoo-aff-cont-checkbox_single one xoo-aff-cont-required xoo_el_reg_terms_cont"><div class="xoo-aff-required xoo-aff-checkbox_single"><label><input type="checkbox" name="xoo_el_reg_terms" class="xoo-aff-required xoo-aff-checkbox_single" value="yes" >I accept the <a href="privacy-policy" target="_blank"> Terms of Service and Privacy Policy </a></label></div></div></div>
<input type="hidden" name="_xoo_el_form" value="register">


<button type="submit" class="button btn xoo-el-action-btn xoo-el-register-btn">Sign Up</button>

<input type="hidden" name="xoo_el_redirect" value="/en/">
					
<div class="xoo-sl-container">

			<div class="xoo-sl-loginvia">
			<span>Or Login Using</span>
		</div>
	
	<div class="xoo-sl-btns-container">

		
			
			<div class="xoo-sl-social-btn xoo-sl-facebook-btn">

				<span class="xoo-sl-btn-icon xoo-sl-icon-facebook2"></span>

				<span class="xoo-sl-btn-txt">Facebook</span>

			</div>

		
			
			<div class="xoo-sl-social-btn xoo-sl-google-btn">

				<span class="xoo-sl-btn-icon xoo-sl-icon-google"></span>

				<span class="xoo-sl-btn-txt">Google</span>

			</div>

		
	</div>
	
</div>
				</form>

				
			</div>

		</div>

	
			
		<div data-section="lostpw" class="xoo-el-section">

			<div class="xoo-el-fields">

				<div class="xoo-el-notice"></div>
				<form class="xoo-el-action-form xoo-el-form-lostpw">

					
					

<span class="xoo-el-form-txt">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</span>

<div class="xoo-aff-group user_login_cont"><div class="xoo-aff-input-group"><span class="xoo-aff-input-icon fas fa-key"></span><input type="text" class="xoo-aff-required xoo-aff-text" name="user_login" placeholder="Username / Email"  value="" required="	"/></div></div>

<input type="hidden" name="_xoo_el_form" value="lostPassword">

<input type="hidden" name="_wp_http_referer" value="/en/" />
<button type="submit" class="button btn xoo-el-action-btn xoo-el-lostpw-btn">Email Reset Link</button>
					
				</form>

				
			</div>

		</div>

	
	
</div>                    </div>
                </div>
            </div>
        </div>
    </div>
</div>		<div class="xoo-sl-notice-container"></div>
		<link rel='stylesheet' id='font-awesome-5-all-css'  href='https://t-speaker.com/en/wp-content/themes/hestia/assets/font-awesome/css/all.min.css?ver=1.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='wpforms-full-css'  href='https://t-speaker.com/en/wp-content/plugins/wpforms-lite/assets/css/wpforms-full.min.css?ver=1.7.1.2' type='text/css' media='all' />
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/go_pricing/assets/js/go_pricing_scripts.js?ver=3.3.19' id='go-pricing-scripts-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/easy-login-woocommerce/xoo-form-fields-fw/lib/select2/select2.js?ver=1.1' id='select2-js'></script>
<script type='text/javascript' id='xoo-aff-js-js-extra'>
/* <![CDATA[ */
var xoo_aff_localize = {"adminurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","countries":"{\"AF\":\"Afghanistan\",\"AX\":\"\u00c5land Islands\",\"AL\":\"Albania\",\"DZ\":\"Algeria\",\"AS\":\"American Samoa\",\"AD\":\"Andorra\",\"AO\":\"Angola\",\"AI\":\"Anguilla\",\"AQ\":\"Antarctica\",\"AG\":\"Antigua and Barbuda\",\"AR\":\"Argentina\",\"AM\":\"Armenia\",\"AW\":\"Aruba\",\"AU\":\"Australia\",\"AT\":\"Austria\",\"AZ\":\"Azerbaijan\",\"BS\":\"Bahamas\",\"BH\":\"Bahrain\",\"BD\":\"Bangladesh\",\"BB\":\"Barbados\",\"BY\":\"Belarus\",\"BE\":\"Belgium\",\"PW\":\"Belau\",\"BZ\":\"Belize\",\"BJ\":\"Benin\",\"BM\":\"Bermuda\",\"BT\":\"Bhutan\",\"BO\":\"Bolivia\",\"BQ\":\"Bonaire, Saint Eustatius and Saba\",\"BA\":\"Bosnia and Herzegovina\",\"BW\":\"Botswana\",\"BV\":\"Bouvet Island\",\"BR\":\"Brazil\",\"IO\":\"British Indian Ocean Territory\",\"BN\":\"Brunei\",\"BG\":\"Bulgaria\",\"BF\":\"Burkina Faso\",\"BI\":\"Burundi\",\"KH\":\"Cambodia\",\"CM\":\"Cameroon\",\"CA\":\"Canada\",\"CV\":\"Cape Verde\",\"KY\":\"Cayman Islands\",\"CF\":\"Central African Republic\",\"TD\":\"Chad\",\"CL\":\"Chile\",\"CN\":\"China\",\"CX\":\"Christmas Island\",\"CC\":\"Cocos (Keeling) Islands\",\"CO\":\"Colombia\",\"KM\":\"Comoros\",\"CG\":\"Congo (Brazzaville)\",\"CD\":\"Congo (Kinshasa)\",\"CK\":\"Cook Islands\",\"CR\":\"Costa Rica\",\"HR\":\"Croatia\",\"CU\":\"Cuba\",\"CW\":\"Cura\u00e7ao\",\"CY\":\"Cyprus\",\"CZ\":\"Czech Republic\",\"DK\":\"Denmark\",\"DJ\":\"Djibouti\",\"DM\":\"Dominica\",\"DO\":\"Dominican Republic\",\"EC\":\"Ecuador\",\"EG\":\"Egypt\",\"SV\":\"El Salvador\",\"GQ\":\"Equatorial Guinea\",\"ER\":\"Eritrea\",\"EE\":\"Estonia\",\"ET\":\"Ethiopia\",\"FK\":\"Falkland Islands\",\"FO\":\"Faroe Islands\",\"FJ\":\"Fiji\",\"FI\":\"Finland\",\"FR\":\"France\",\"GF\":\"French Guiana\",\"PF\":\"French Polynesia\",\"TF\":\"French Southern Territories\",\"GA\":\"Gabon\",\"GM\":\"Gambia\",\"GE\":\"Georgia\",\"DE\":\"Germany\",\"GH\":\"Ghana\",\"GI\":\"Gibraltar\",\"GR\":\"Greece\",\"GL\":\"Greenland\",\"GD\":\"Grenada\",\"GP\":\"Guadeloupe\",\"GU\":\"Guam\",\"GT\":\"Guatemala\",\"GG\":\"Guernsey\",\"GN\":\"Guinea\",\"GW\":\"Guinea-Bissau\",\"GY\":\"Guyana\",\"HT\":\"Haiti\",\"HM\":\"Heard Island and McDonald Islands\",\"HN\":\"Honduras\",\"HK\":\"Hong Kong\",\"HU\":\"Hungary\",\"IS\":\"Iceland\",\"IN\":\"India\",\"ID\":\"Indonesia\",\"IR\":\"Iran\",\"IQ\":\"Iraq\",\"IE\":\"Ireland\",\"IM\":\"Isle of Man\",\"IL\":\"Israel\",\"IT\":\"Italy\",\"CI\":\"Ivory Coast\",\"JM\":\"Jamaica\",\"JP\":\"Japan\",\"JE\":\"Jersey\",\"JO\":\"Jordan\",\"KZ\":\"Kazakhstan\",\"KE\":\"Kenya\",\"KI\":\"Kiribati\",\"KW\":\"Kuwait\",\"KG\":\"Kyrgyzstan\",\"LA\":\"Laos\",\"LV\":\"Latvia\",\"LB\":\"Lebanon\",\"LS\":\"Lesotho\",\"LR\":\"Liberia\",\"LY\":\"Libya\",\"LI\":\"Liechtenstein\",\"LT\":\"Lithuania\",\"LU\":\"Luxembourg\",\"MO\":\"Macao S.A.R., China\",\"MK\":\"North Macedonia\",\"MG\":\"Madagascar\",\"MW\":\"Malawi\",\"MY\":\"Malaysia\",\"MV\":\"Maldives\",\"ML\":\"Mali\",\"MT\":\"Malta\",\"MH\":\"Marshall Islands\",\"MQ\":\"Martinique\",\"MR\":\"Mauritania\",\"MU\":\"Mauritius\",\"YT\":\"Mayotte\",\"MX\":\"Mexico\",\"FM\":\"Micronesia\",\"MD\":\"Moldova\",\"MC\":\"Monaco\",\"MN\":\"Mongolia\",\"ME\":\"Montenegro\",\"MS\":\"Montserrat\",\"MA\":\"Morocco\",\"MZ\":\"Mozambique\",\"MM\":\"Myanmar\",\"NA\":\"Namibia\",\"NR\":\"Nauru\",\"NP\":\"Nepal\",\"NL\":\"Netherlands\",\"NC\":\"New Caledonia\",\"NZ\":\"New Zealand\",\"NI\":\"Nicaragua\",\"NE\":\"Niger\",\"NG\":\"Nigeria\",\"NU\":\"Niue\",\"NF\":\"Norfolk Island\",\"MP\":\"Northern Mariana Islands\",\"KP\":\"North Korea\",\"NO\":\"Norway\",\"OM\":\"Oman\",\"PK\":\"Pakistan\",\"PS\":\"Palestinian Territory\",\"PA\":\"Panama\",\"PG\":\"Papua New Guinea\",\"PY\":\"Paraguay\",\"PE\":\"Peru\",\"PH\":\"Philippines\",\"PN\":\"Pitcairn\",\"PL\":\"Poland\",\"PT\":\"Portugal\",\"PR\":\"Puerto Rico\",\"QA\":\"Qatar\",\"RE\":\"Reunion\",\"RO\":\"Romania\",\"RU\":\"Russia\",\"RW\":\"Rwanda\",\"BL\":\"Saint Barth\u00e9lemy\",\"SH\":\"Saint Helena\",\"KN\":\"Saint Kitts and Nevis\",\"LC\":\"Saint Lucia\",\"MF\":\"Saint Martin (French part)\",\"SX\":\"Saint Martin (Dutch part)\",\"PM\":\"Saint Pierre and Miquelon\",\"VC\":\"Saint Vincent and the Grenadines\",\"SM\":\"San Marino\",\"ST\":\"S\u00e3o Tom\u00e9 and Pr\u00edncipe\",\"SA\":\"Saudi Arabia\",\"SN\":\"Senegal\",\"RS\":\"Serbia\",\"SC\":\"Seychelles\",\"SL\":\"Sierra Leone\",\"SG\":\"Singapore\",\"SK\":\"Slovakia\",\"SI\":\"Slovenia\",\"SB\":\"Solomon Islands\",\"SO\":\"Somalia\",\"ZA\":\"South Africa\",\"GS\":\"South Georgia\\\/Sandwich Islands\",\"KR\":\"South Korea\",\"SS\":\"South Sudan\",\"ES\":\"Spain\",\"LK\":\"Sri Lanka\",\"SD\":\"Sudan\",\"SR\":\"Suriname\",\"SJ\":\"Svalbard and Jan Mayen\",\"SZ\":\"Swaziland\",\"SE\":\"Sweden\",\"CH\":\"Switzerland\",\"SY\":\"Syria\",\"TW\":\"Taiwan\",\"TJ\":\"Tajikistan\",\"TZ\":\"Tanzania\",\"TH\":\"Thailand\",\"TL\":\"Timor-Leste\",\"TG\":\"Togo\",\"TK\":\"Tokelau\",\"TO\":\"Tonga\",\"TT\":\"Trinidad and Tobago\",\"TN\":\"Tunisia\",\"TR\":\"Turkey\",\"TM\":\"Turkmenistan\",\"TC\":\"Turks and Caicos Islands\",\"TV\":\"Tuvalu\",\"UG\":\"Uganda\",\"UA\":\"Ukraine\",\"AE\":\"United Arab Emirates\",\"GB\":\"United Kingdom (UK)\",\"US\":\"United States (US)\",\"UM\":\"United States (US) Minor Outlying Islands\",\"UY\":\"Uruguay\",\"UZ\":\"Uzbekistan\",\"VU\":\"Vanuatu\",\"VA\":\"Vatican\",\"VE\":\"Venezuela\",\"VN\":\"Vietnam\",\"VG\":\"Virgin Islands (British)\",\"VI\":\"Virgin Islands (US)\",\"WF\":\"Wallis and Futuna\",\"EH\":\"Western Sahara\",\"WS\":\"Samoa\",\"YE\":\"Yemen\",\"ZM\":\"Zambia\",\"ZW\":\"Zimbabwe\"}","states":"{\"AF\":[],\"AO\":{\"BGO\":\"Bengo\",\"BLU\":\"Benguela\",\"BIE\":\"Bi\\u00e9\",\"CAB\":\"Cabinda\",\"CNN\":\"Cunene\",\"HUA\":\"Huambo\",\"HUI\":\"Hu\\u00edla\",\"CCU\":\"Kuando Kubango\",\"CNO\":\"Kwanza-Norte\",\"CUS\":\"Kwanza-Sul\",\"LUA\":\"Luanda\",\"LNO\":\"Lunda-Norte\",\"LSU\":\"Lunda-Sul\",\"MAL\":\"Malanje\",\"MOX\":\"Moxico\",\"NAM\":\"Namibe\",\"UIG\":\"U\\u00edge\",\"ZAI\":\"Zaire\"},\"AR\":{\"C\":\"Ciudad Aut\u00f3noma de Buenos Aires\",\"B\":\"Buenos Aires\",\"K\":\"Catamarca\",\"H\":\"Chaco\",\"U\":\"Chubut\",\"X\":\"C\u00f3rdoba\",\"W\":\"Corrientes\",\"E\":\"Entre R\u00edos\",\"P\":\"Formosa\",\"Y\":\"Jujuy\",\"L\":\"La Pampa\",\"F\":\"La Rioja\",\"M\":\"Mendoza\",\"N\":\"Misiones\",\"Q\":\"Neuqu\u00e9n\",\"R\":\"R\u00edo Negro\",\"A\":\"Salta\",\"J\":\"San Juan\",\"D\":\"San Luis\",\"Z\":\"Santa Cruz\",\"S\":\"Santa Fe\",\"G\":\"Santiago del Estero\",\"V\":\"Tierra del Fuego\",\"T\":\"Tucum\u00e1n\"},\"AT\":[],\"AU\":{\"ACT\":\"Australian Capital Territory\",\"NSW\":\"New South Wales\",\"NT\":\"Northern Territory\",\"QLD\":\"Queensland\",\"SA\":\"South Australia\",\"TAS\":\"Tasmania\",\"VIC\":\"Victoria\",\"WA\":\"Western Australia\"},\"AX\":[],\"BD\":{\"BD-05\":\"Bagerhat\",\"BD-01\":\"Bandarban\",\"BD-02\":\"Barguna\",\"BD-06\":\"Barishal\",\"BD-07\":\"Bhola\",\"BD-03\":\"Bogura\",\"BD-04\":\"Brahmanbaria\",\"BD-09\":\"Chandpur\",\"BD-10\":\"Chattogram\",\"BD-12\":\"Chuadanga\",\"BD-11\":\"Cox's Bazar\",\"BD-08\":\"Cumilla\",\"BD-13\":\"Dhaka\",\"BD-14\":\"Dinajpur\",\"BD-15\":\"Faridpur \",\"BD-16\":\"Feni\",\"BD-19\":\"Gaibandha\",\"BD-18\":\"Gazipur\",\"BD-17\":\"Gopalganj\",\"BD-20\":\"Habiganj\",\"BD-21\":\"Jamalpur\",\"BD-22\":\"Jashore\",\"BD-25\":\"Jhalokati\",\"BD-23\":\"Jhenaidah\",\"BD-24\":\"Joypurhat\",\"BD-29\":\"Khagrachhari\",\"BD-27\":\"Khulna\",\"BD-26\":\"Kishoreganj\",\"BD-28\":\"Kurigram\",\"BD-30\":\"Kushtia\",\"BD-31\":\"Lakshmipur\",\"BD-32\":\"Lalmonirhat\",\"BD-36\":\"Madaripur\",\"BD-37\":\"Magura\",\"BD-33\":\"Manikganj \",\"BD-39\":\"Meherpur\",\"BD-38\":\"Moulvibazar\",\"BD-35\":\"Munshiganj\",\"BD-34\":\"Mymensingh\",\"BD-48\":\"Naogaon\",\"BD-43\":\"Narail\",\"BD-40\":\"Narayanganj\",\"BD-42\":\"Narsingdi\",\"BD-44\":\"Natore\",\"BD-45\":\"Nawabganj\",\"BD-41\":\"Netrakona\",\"BD-46\":\"Nilphamari\",\"BD-47\":\"Noakhali\",\"BD-49\":\"Pabna\",\"BD-52\":\"Panchagarh\",\"BD-51\":\"Patuakhali\",\"BD-50\":\"Pirojpur\",\"BD-53\":\"Rajbari\",\"BD-54\":\"Rajshahi\",\"BD-56\":\"Rangamati\",\"BD-55\":\"Rangpur\",\"BD-58\":\"Satkhira\",\"BD-62\":\"Shariatpur\",\"BD-57\":\"Sherpur\",\"BD-59\":\"Sirajganj\",\"BD-61\":\"Sunamganj\",\"BD-60\":\"Sylhet\",\"BD-63\":\"Tangail\",\"BD-64\":\"Thakurgaon\"},\"BE\":[],\"BG\":{\"BG-01\":\"Blagoevgrad\",\"BG-02\":\"Burgas\",\"BG-08\":\"Dobrich\",\"BG-07\":\"Gabrovo\",\"BG-26\":\"Haskovo\",\"BG-09\":\"Kardzhali\",\"BG-10\":\"Kyustendil\",\"BG-11\":\"Lovech\",\"BG-12\":\"Montana\",\"BG-13\":\"Pazardzhik\",\"BG-14\":\"Pernik\",\"BG-15\":\"Pleven\",\"BG-16\":\"Plovdiv\",\"BG-17\":\"Razgrad\",\"BG-18\":\"Ruse\",\"BG-27\":\"Shumen\",\"BG-19\":\"Silistra\",\"BG-20\":\"Sliven\",\"BG-21\":\"Smolyan\",\"BG-23\":\"Sofia\",\"BG-22\":\"Sofia-Grad\",\"BG-24\":\"Stara Zagora\",\"BG-25\":\"Targovishte\",\"BG-03\":\"Varna\",\"BG-04\":\"Veliko Tarnovo\",\"BG-05\":\"Vidin\",\"BG-06\":\"Vratsa\",\"BG-28\":\"Yambol\"},\"BH\":[],\"BI\":[],\"BO\":{\"B\":\"Chuquisaca\",\"H\":\"Beni\",\"C\":\"Cochabamba\",\"L\":\"La Paz\",\"O\":\"Oruro\",\"N\":\"Pando\",\"P\":\"Potos\\u00ed\",\"S\":\"Santa Cruz\",\"T\":\"Tarija\"},\"BR\":{\"AC\":\"Acre\",\"AL\":\"Alagoas\",\"AP\":\"Amap\u00e1\",\"AM\":\"Amazonas\",\"BA\":\"Bahia\",\"CE\":\"Cear\u00e1\",\"DF\":\"Distrito Federal\",\"ES\":\"Esp\u00edrito Santo\",\"GO\":\"Goi\u00e1s\",\"MA\":\"Maranh\u00e3o\",\"MT\":\"Mato Grosso\",\"MS\":\"Mato Grosso do Sul\",\"MG\":\"Minas Gerais\",\"PA\":\"Par\u00e1\",\"PB\":\"Para\u00edba\",\"PR\":\"Paran\u00e1\",\"PE\":\"Pernambuco\",\"PI\":\"Piau\u00ed\",\"RJ\":\"Rio de Janeiro\",\"RN\":\"Rio Grande do Norte\",\"RS\":\"Rio Grande do Sul\",\"RO\":\"Rond\u00f4nia\",\"RR\":\"Roraima\",\"SC\":\"Santa Catarina\",\"SP\":\"S\u00e3o Paulo\",\"SE\":\"Sergipe\",\"TO\":\"Tocantins\"},\"CA\":{\"AB\":\"Alberta\",\"BC\":\"British Columbia\",\"MB\":\"Manitoba\",\"NB\":\"New Brunswick\",\"NL\":\"Newfoundland and Labrador\",\"NT\":\"Northwest Territories\",\"NS\":\"Nova Scotia\",\"NU\":\"Nunavut\",\"ON\":\"Ontario\",\"PE\":\"Prince Edward Island\",\"QC\":\"Quebec\",\"SK\":\"Saskatchewan\",\"YT\":\"Yukon Territory\"},\"CH\":{\"AG\":\"Aargau\",\"AR\":\"Appenzell Ausserrhoden\",\"AI\":\"Appenzell Innerrhoden\",\"BL\":\"Basel-Landschaft\",\"BS\":\"Basel-Stadt\",\"BE\":\"Bern\",\"FR\":\"Fribourg\",\"GE\":\"Geneva\",\"GL\":\"Glarus\",\"GR\":\"Graub\u00fcnden\",\"JU\":\"Jura\",\"LU\":\"Luzern\",\"NE\":\"Neuch\u00e2tel\",\"NW\":\"Nidwalden\",\"OW\":\"Obwalden\",\"SH\":\"Schaffhausen\",\"SZ\":\"Schwyz\",\"SO\":\"Solothurn\",\"SG\":\"St. Gallen\",\"TG\":\"Thurgau\",\"TI\":\"Ticino\",\"UR\":\"Uri\",\"VS\":\"Valais\",\"VD\":\"Vaud\",\"ZG\":\"Zug\",\"ZH\":\"Z\u00fcrich\"},\"CN\":{\"CN1\":\"Yunnan \\\/ \u4e91\u5357\",\"CN2\":\"Beijing \\\/ \u5317\u4eac\",\"CN3\":\"Tianjin \\\/ \u5929\u6d25\",\"CN4\":\"Hebei \\\/ \u6cb3\u5317\",\"CN5\":\"Shanxi \\\/ \u5c71\u897f\",\"CN6\":\"Inner Mongolia \\\/ \u5167\u8499\u53e4\",\"CN7\":\"Liaoning \\\/ \u8fbd\u5b81\",\"CN8\":\"Jilin \\\/ \u5409\u6797\",\"CN9\":\"Heilongjiang \\\/ \u9ed1\u9f99\u6c5f\",\"CN10\":\"Shanghai \\\/ \u4e0a\u6d77\",\"CN11\":\"Jiangsu \\\/ \u6c5f\u82cf\",\"CN12\":\"Zhejiang \\\/ \u6d59\u6c5f\",\"CN13\":\"Anhui \\\/ \u5b89\u5fbd\",\"CN14\":\"Fujian \\\/ \u798f\u5efa\",\"CN15\":\"Jiangxi \\\/ \u6c5f\u897f\",\"CN16\":\"Shandong \\\/ \u5c71\u4e1c\",\"CN17\":\"Henan \\\/ \u6cb3\u5357\",\"CN18\":\"Hubei \\\/ \u6e56\u5317\",\"CN19\":\"Hunan \\\/ \u6e56\u5357\",\"CN20\":\"Guangdong \\\/ \u5e7f\u4e1c\",\"CN21\":\"Guangxi Zhuang \\\/ \u5e7f\u897f\u58ee\u65cf\",\"CN22\":\"Hainan \\\/ \u6d77\u5357\",\"CN23\":\"Chongqing \\\/ \u91cd\u5e86\",\"CN24\":\"Sichuan \\\/ \u56db\u5ddd\",\"CN25\":\"Guizhou \\\/ \u8d35\u5dde\",\"CN26\":\"Shaanxi \\\/ \u9655\u897f\",\"CN27\":\"Gansu \\\/ \u7518\u8083\",\"CN28\":\"Qinghai \\\/ \u9752\u6d77\",\"CN29\":\"Ningxia Hui \\\/ \u5b81\u590f\",\"CN30\":\"Macau \\\/ \u6fb3\u95e8\",\"CN31\":\"Tibet \\\/ \u897f\u85cf\",\"CN32\":\"Xinjiang \\\/ \u65b0\u7586\"},\"CZ\":[],\"DE\":[],\"DK\":[],\"EE\":[],\"ES\":{\"C\":\"A Coru\u00f1a\",\"VI\":\"Araba\\\/\u00c1lava\",\"AB\":\"Albacete\",\"A\":\"Alicante\",\"AL\":\"Almer\u00eda\",\"O\":\"Asturias\",\"AV\":\"\u00c1vila\",\"BA\":\"Badajoz\",\"PM\":\"Baleares\",\"B\":\"Barcelona\",\"BU\":\"Burgos\",\"CC\":\"C\u00e1ceres\",\"CA\":\"C\u00e1diz\",\"S\":\"Cantabria\",\"CS\":\"Castell\u00f3n\",\"CE\":\"Ceuta\",\"CR\":\"Ciudad Real\",\"CO\":\"C\u00f3rdoba\",\"CU\":\"Cuenca\",\"GI\":\"Girona\",\"GR\":\"Granada\",\"GU\":\"Guadalajara\",\"SS\":\"Gipuzkoa\",\"H\":\"Huelva\",\"HU\":\"Huesca\",\"J\":\"Ja\u00e9n\",\"LO\":\"La Rioja\",\"GC\":\"Las Palmas\",\"LE\":\"Le\u00f3n\",\"L\":\"Lleida\",\"LU\":\"Lugo\",\"M\":\"Madrid\",\"MA\":\"M\u00e1laga\",\"ML\":\"Melilla\",\"MU\":\"Murcia\",\"NA\":\"Navarra\",\"OR\":\"Ourense\",\"P\":\"Palencia\",\"PO\":\"Pontevedra\",\"SA\":\"Salamanca\",\"TF\":\"Santa Cruz de Tenerife\",\"SG\":\"Segovia\",\"SE\":\"Sevilla\",\"SO\":\"Soria\",\"T\":\"Tarragona\",\"TE\":\"Teruel\",\"TO\":\"Toledo\",\"V\":\"Valencia\",\"VA\":\"Valladolid\",\"BI\":\"Bizkaia\",\"ZA\":\"Zamora\",\"Z\":\"Zaragoza\"},\"FI\":[],\"FR\":[],\"GP\":[],\"GR\":{\"I\":\"\\u0391\\u03c4\\u03c4\\u03b9\\u03ba\\u03ae\",\"A\":\"\\u0391\\u03bd\\u03b1\\u03c4\\u03bf\\u03bb\\u03b9\\u03ba\\u03ae \\u039c\\u03b1\\u03ba\\u03b5\\u03b4\\u03bf\\u03bd\\u03af\\u03b1 \\u03ba\\u03b1\\u03b9 \\u0398\\u03c1\\u03ac\\u03ba\\u03b7\",\"B\":\"\\u039a\\u03b5\\u03bd\\u03c4\\u03c1\\u03b9\\u03ba\\u03ae \\u039c\\u03b1\\u03ba\\u03b5\\u03b4\\u03bf\\u03bd\\u03af\\u03b1\",\"C\":\"\\u0394\\u03c5\\u03c4\\u03b9\\u03ba\\u03ae \\u039c\\u03b1\\u03ba\\u03b5\\u03b4\\u03bf\\u03bd\\u03af\\u03b1\",\"D\":\"\\u0389\\u03c0\\u03b5\\u03b9\\u03c1\\u03bf\\u03c2\",\"E\":\"\\u0398\\u03b5\\u03c3\\u03c3\\u03b1\\u03bb\\u03af\\u03b1\",\"F\":\"\\u0399\\u03cc\\u03bd\\u03b9\\u03bf\\u03b9 \\u039d\\u03ae\\u03c3\\u03bf\\u03b9\",\"G\":\"\\u0394\\u03c5\\u03c4\\u03b9\\u03ba\\u03ae \\u0395\\u03bb\\u03bb\\u03ac\\u03b4\\u03b1\",\"H\":\"\\u03a3\\u03c4\\u03b5\\u03c1\\u03b5\\u03ac \\u0395\\u03bb\\u03bb\\u03ac\\u03b4\\u03b1\",\"J\":\"\\u03a0\\u03b5\\u03bb\\u03bf\\u03c0\\u03cc\\u03bd\\u03bd\\u03b7\\u03c3\\u03bf\\u03c2\",\"K\":\"\\u0392\\u03cc\\u03c1\\u03b5\\u03b9\\u03bf \\u0391\\u03b9\\u03b3\\u03b1\\u03af\\u03bf\",\"L\":\"\\u039d\\u03cc\\u03c4\\u03b9\\u03bf \\u0391\\u03b9\\u03b3\\u03b1\\u03af\\u03bf\",\"M\":\"\\u039a\\u03c1\\u03ae\\u03c4\\u03b7\"},\"GF\":[],\"HK\":{\"HONG KONG\":\"Hong Kong Island\",\"KOWLOON\":\"Kowloon\",\"NEW TERRITORIES\":\"New Territories\"},\"HU\":{\"BK\":\"B\\u00e1cs-Kiskun\",\"BE\":\"B\\u00e9k\\u00e9s\",\"BA\":\"Baranya\",\"BZ\":\"Borsod-Aba\\u00faj-Zempl\\u00e9n\",\"BU\":\"Budapest\",\"CS\":\"Csongr\\u00e1d\",\"FE\":\"Fej\\u00e9r\",\"GS\":\"Gy\\u0151r-Moson-Sopron\",\"HB\":\"Hajd\\u00fa-Bihar\",\"HE\":\"Heves\",\"JN\":\"J\\u00e1sz-Nagykun-Szolnok\",\"KE\":\"Kom\\u00e1rom-Esztergom\",\"NO\":\"N\\u00f3gr\\u00e1d\",\"PE\":\"Pest\",\"SO\":\"Somogy\",\"SZ\":\"Szabolcs-Szatm\\u00e1r-Bereg\",\"TO\":\"Tolna\",\"VA\":\"Vas\",\"VE\":\"Veszpr\\u00e9m\",\"ZA\":\"Zala\"},\"ID\":{\"AC\":\"Daerah Istimewa Aceh\",\"SU\":\"Sumatera Utara\",\"SB\":\"Sumatera Barat\",\"RI\":\"Riau\",\"KR\":\"Kepulauan Riau\",\"JA\":\"Jambi\",\"SS\":\"Sumatera Selatan\",\"BB\":\"Bangka Belitung\",\"BE\":\"Bengkulu\",\"LA\":\"Lampung\",\"JK\":\"DKI Jakarta\",\"JB\":\"Jawa Barat\",\"BT\":\"Banten\",\"JT\":\"Jawa Tengah\",\"JI\":\"Jawa Timur\",\"YO\":\"Daerah Istimewa Yogyakarta\",\"BA\":\"Bali\",\"NB\":\"Nusa Tenggara Barat\",\"NT\":\"Nusa Tenggara Timur\",\"KB\":\"Kalimantan Barat\",\"KT\":\"Kalimantan Tengah\",\"KI\":\"Kalimantan Timur\",\"KS\":\"Kalimantan Selatan\",\"KU\":\"Kalimantan Utara\",\"SA\":\"Sulawesi Utara\",\"ST\":\"Sulawesi Tengah\",\"SG\":\"Sulawesi Tenggara\",\"SR\":\"Sulawesi Barat\",\"SN\":\"Sulawesi Selatan\",\"GO\":\"Gorontalo\",\"MA\":\"Maluku\",\"MU\":\"Maluku Utara\",\"PA\":\"Papua\",\"PB\":\"Papua Barat\"},\"IE\":{\"CW\":\"Carlow\",\"CN\":\"Cavan\",\"CE\":\"Clare\",\"CO\":\"Cork\",\"DL\":\"Donegal\",\"D\":\"Dublin\",\"G\":\"Galway\",\"KY\":\"Kerry\",\"KE\":\"Kildare\",\"KK\":\"Kilkenny\",\"LS\":\"Laois\",\"LM\":\"Leitrim\",\"LK\":\"Limerick\",\"LD\":\"Longford\",\"LH\":\"Louth\",\"MO\":\"Mayo\",\"MH\":\"Meath\",\"MN\":\"Monaghan\",\"OY\":\"Offaly\",\"RN\":\"Roscommon\",\"SO\":\"Sligo\",\"TA\":\"Tipperary\",\"WD\":\"Waterford\",\"WH\":\"Westmeath\",\"WX\":\"Wexford\",\"WW\":\"Wicklow\"},\"IN\":{\"AP\":\"Andhra Pradesh\",\"AR\":\"Arunachal Pradesh\",\"AS\":\"Assam\",\"BR\":\"Bihar\",\"CT\":\"Chhattisgarh\",\"GA\":\"Goa\",\"GJ\":\"Gujarat\",\"HR\":\"Haryana\",\"HP\":\"Himachal Pradesh\",\"JK\":\"Jammu and Kashmir\",\"JH\":\"Jharkhand\",\"KA\":\"Karnataka\",\"KL\":\"Kerala\",\"MP\":\"Madhya Pradesh\",\"MH\":\"Maharashtra\",\"MN\":\"Manipur\",\"ML\":\"Meghalaya\",\"MZ\":\"Mizoram\",\"NL\":\"Nagaland\",\"OR\":\"Orissa\",\"PB\":\"Punjab\",\"RJ\":\"Rajasthan\",\"SK\":\"Sikkim\",\"TN\":\"Tamil Nadu\",\"TS\":\"Telangana\",\"TR\":\"Tripura\",\"UK\":\"Uttarakhand\",\"UP\":\"Uttar Pradesh\",\"WB\":\"West Bengal\",\"AN\":\"Andaman and Nicobar Islands\",\"CH\":\"Chandigarh\",\"DN\":\"Dadra and Nagar Haveli\",\"DD\":\"Daman and Diu\",\"DL\":\"Delhi\",\"LD\":\"Lakshadeep\",\"PY\":\"Pondicherry (Puducherry)\"},\"IR\":{\"KHZ\":\"Khuzestan  (\\u062e\\u0648\\u0632\\u0633\\u062a\\u0627\\u0646)\",\"THR\":\"Tehran  (\\u062a\\u0647\\u0631\\u0627\\u0646)\",\"ILM\":\"Ilaam (\\u0627\\u06cc\\u0644\\u0627\\u0645)\",\"BHR\":\"Bushehr (\\u0628\\u0648\\u0634\\u0647\\u0631)\",\"ADL\":\"Ardabil (\\u0627\\u0631\\u062f\\u0628\\u06cc\\u0644)\",\"ESF\":\"Isfahan (\\u0627\\u0635\\u0641\\u0647\\u0627\\u0646)\",\"YZD\":\"Yazd (\\u06cc\\u0632\\u062f)\",\"KRH\":\"Kermanshah (\\u06a9\\u0631\\u0645\\u0627\\u0646\\u0634\\u0627\\u0647)\",\"KRN\":\"Kerman (\\u06a9\\u0631\\u0645\\u0627\\u0646)\",\"HDN\":\"Hamadan (\\u0647\\u0645\\u062f\\u0627\\u0646)\",\"GZN\":\"Ghazvin (\\u0642\\u0632\\u0648\\u06cc\\u0646)\",\"ZJN\":\"Zanjan (\\u0632\\u0646\\u062c\\u0627\\u0646)\",\"LRS\":\"Luristan (\\u0644\\u0631\\u0633\\u062a\\u0627\\u0646)\",\"ABZ\":\"Alborz (\\u0627\\u0644\\u0628\\u0631\\u0632)\",\"EAZ\":\"East Azarbaijan (\\u0622\\u0630\\u0631\\u0628\\u0627\\u06cc\\u062c\\u0627\\u0646 \\u0634\\u0631\\u0642\\u06cc)\",\"WAZ\":\"West Azarbaijan (\\u0622\\u0630\\u0631\\u0628\\u0627\\u06cc\\u062c\\u0627\\u0646 \\u063a\\u0631\\u0628\\u06cc)\",\"CHB\":\"Chaharmahal and Bakhtiari (\\u0686\\u0647\\u0627\\u0631\\u0645\\u062d\\u0627\\u0644 \\u0648 \\u0628\\u062e\\u062a\\u06cc\\u0627\\u0631\\u06cc)\",\"SKH\":\"South Khorasan (\\u062e\\u0631\\u0627\\u0633\\u0627\\u0646 \\u062c\\u0646\\u0648\\u0628\\u06cc)\",\"RKH\":\"Razavi Khorasan (\\u062e\\u0631\\u0627\\u0633\\u0627\\u0646 \\u0631\\u0636\\u0648\\u06cc)\",\"NKH\":\"North Khorasan (\\u062e\\u0631\\u0627\\u0633\\u0627\\u0646 \\u0634\\u0645\\u0627\\u0644\\u06cc)\",\"SMN\":\"Semnan (\\u0633\\u0645\\u0646\\u0627\\u0646)\",\"FRS\":\"Fars (\\u0641\\u0627\\u0631\\u0633)\",\"QHM\":\"Qom (\\u0642\\u0645)\",\"KRD\":\"Kurdistan \\\/ \\u06a9\\u0631\\u062f\\u0633\\u062a\\u0627\\u0646)\",\"KBD\":\"Kohgiluyeh and BoyerAhmad (\\u06a9\\u0647\\u06af\\u06cc\\u0644\\u0648\\u06cc\\u06cc\\u0647 \\u0648 \\u0628\\u0648\\u06cc\\u0631\\u0627\\u062d\\u0645\\u062f)\",\"GLS\":\"Golestan (\\u06af\\u0644\\u0633\\u062a\\u0627\\u0646)\",\"GIL\":\"Gilan (\\u06af\\u06cc\\u0644\\u0627\\u0646)\",\"MZN\":\"Mazandaran (\\u0645\\u0627\\u0632\\u0646\\u062f\\u0631\\u0627\\u0646)\",\"MKZ\":\"Markazi (\\u0645\\u0631\\u06a9\\u0632\\u06cc)\",\"HRZ\":\"Hormozgan (\\u0647\\u0631\\u0645\\u0632\\u06af\\u0627\\u0646)\",\"SBN\":\"Sistan and Baluchestan (\\u0633\\u06cc\\u0633\\u062a\\u0627\\u0646 \\u0648 \\u0628\\u0644\\u0648\\u0686\\u0633\\u062a\\u0627\\u0646)\"},\"IS\":[],\"IT\":{\"AG\":\"Agrigento\",\"AL\":\"Alessandria\",\"AN\":\"Ancona\",\"AO\":\"Aosta\",\"AR\":\"Arezzo\",\"AP\":\"Ascoli Piceno\",\"AT\":\"Asti\",\"AV\":\"Avellino\",\"BA\":\"Bari\",\"BT\":\"Barletta-Andria-Trani\",\"BL\":\"Belluno\",\"BN\":\"Benevento\",\"BG\":\"Bergamo\",\"BI\":\"Biella\",\"BO\":\"Bologna\",\"BZ\":\"Bolzano\",\"BS\":\"Brescia\",\"BR\":\"Brindisi\",\"CA\":\"Cagliari\",\"CL\":\"Caltanissetta\",\"CB\":\"Campobasso\",\"CE\":\"Caserta\",\"CT\":\"Catania\",\"CZ\":\"Catanzaro\",\"CH\":\"Chieti\",\"CO\":\"Como\",\"CS\":\"Cosenza\",\"CR\":\"Cremona\",\"KR\":\"Crotone\",\"CN\":\"Cuneo\",\"EN\":\"Enna\",\"FM\":\"Fermo\",\"FE\":\"Ferrara\",\"FI\":\"Firenze\",\"FG\":\"Foggia\",\"FC\":\"Forl\\u00ec-Cesena\",\"FR\":\"Frosinone\",\"GE\":\"Genova\",\"GO\":\"Gorizia\",\"GR\":\"Grosseto\",\"IM\":\"Imperia\",\"IS\":\"Isernia\",\"SP\":\"La Spezia\",\"AQ\":\"L'Aquila\",\"LT\":\"Latina\",\"LE\":\"Lecce\",\"LC\":\"Lecco\",\"LI\":\"Livorno\",\"LO\":\"Lodi\",\"LU\":\"Lucca\",\"MC\":\"Macerata\",\"MN\":\"Mantova\",\"MS\":\"Massa-Carrara\",\"MT\":\"Matera\",\"ME\":\"Messina\",\"MI\":\"Milano\",\"MO\":\"Modena\",\"MB\":\"Monza e della Brianza\",\"NA\":\"Napoli\",\"NO\":\"Novara\",\"NU\":\"Nuoro\",\"OR\":\"Oristano\",\"PD\":\"Padova\",\"PA\":\"Palermo\",\"PR\":\"Parma\",\"PV\":\"Pavia\",\"PG\":\"Perugia\",\"PU\":\"Pesaro e Urbino\",\"PE\":\"Pescara\",\"PC\":\"Piacenza\",\"PI\":\"Pisa\",\"PT\":\"Pistoia\",\"PN\":\"Pordenone\",\"PZ\":\"Potenza\",\"PO\":\"Prato\",\"RG\":\"Ragusa\",\"RA\":\"Ravenna\",\"RC\":\"Reggio Calabria\",\"RE\":\"Reggio Emilia\",\"RI\":\"Rieti\",\"RN\":\"Rimini\",\"RM\":\"Roma\",\"RO\":\"Rovigo\",\"SA\":\"Salerno\",\"SS\":\"Sassari\",\"SV\":\"Savona\",\"SI\":\"Siena\",\"SR\":\"Siracusa\",\"SO\":\"Sondrio\",\"SU\":\"Sud Sardegna\",\"TA\":\"Taranto\",\"TE\":\"Teramo\",\"TR\":\"Terni\",\"TO\":\"Torino\",\"TP\":\"Trapani\",\"TN\":\"Trento\",\"TV\":\"Treviso\",\"TS\":\"Trieste\",\"UD\":\"Udine\",\"VA\":\"Varese\",\"VE\":\"Venezia\",\"VB\":\"Verbano-Cusio-Ossola\",\"VC\":\"Vercelli\",\"VR\":\"Verona\",\"VV\":\"Vibo Valentia\",\"VI\":\"Vicenza\",\"VT\":\"Viterbo\"},\"IL\":[],\"IM\":[],\"JP\":{\"JP01\":\"Hokkaido\",\"JP02\":\"Aomori\",\"JP03\":\"Iwate\",\"JP04\":\"Miyagi\",\"JP05\":\"Akita\",\"JP06\":\"Yamagata\",\"JP07\":\"Fukushima\",\"JP08\":\"Ibaraki\",\"JP09\":\"Tochigi\",\"JP10\":\"Gunma\",\"JP11\":\"Saitama\",\"JP12\":\"Chiba\",\"JP13\":\"Tokyo\",\"JP14\":\"Kanagawa\",\"JP15\":\"Niigata\",\"JP16\":\"Toyama\",\"JP17\":\"Ishikawa\",\"JP18\":\"Fukui\",\"JP19\":\"Yamanashi\",\"JP20\":\"Nagano\",\"JP21\":\"Gifu\",\"JP22\":\"Shizuoka\",\"JP23\":\"Aichi\",\"JP24\":\"Mie\",\"JP25\":\"Shiga\",\"JP26\":\"Kyoto\",\"JP27\":\"Osaka\",\"JP28\":\"Hyogo\",\"JP29\":\"Nara\",\"JP30\":\"Wakayama\",\"JP31\":\"Tottori\",\"JP32\":\"Shimane\",\"JP33\":\"Okayama\",\"JP34\":\"Hiroshima\",\"JP35\":\"Yamaguchi\",\"JP36\":\"Tokushima\",\"JP37\":\"Kagawa\",\"JP38\":\"Ehime\",\"JP39\":\"Kochi\",\"JP40\":\"Fukuoka\",\"JP41\":\"Saga\",\"JP42\":\"Nagasaki\",\"JP43\":\"Kumamoto\",\"JP44\":\"Oita\",\"JP45\":\"Miyazaki\",\"JP46\":\"Kagoshima\",\"JP47\":\"Okinawa\"},\"KR\":[],\"KW\":[],\"LB\":[],\"LR\":{\"BM\":\"Bomi\",\"BN\":\"Bong\",\"GA\":\"Gbarpolu\",\"GB\":\"Grand Bassa\",\"GC\":\"Grand Cape Mount\",\"GG\":\"Grand Gedeh\",\"GK\":\"Grand Kru\",\"LO\":\"Lofa\",\"MA\":\"Margibi\",\"MY\":\"Maryland\",\"MO\":\"Montserrado\",\"NM\":\"Nimba\",\"RV\":\"Rivercess\",\"RG\":\"River Gee\",\"SN\":\"Sinoe\"},\"LU\":[],\"MD\":{\"C\":\"Chi\u0219in\u0103u\",\"BL\":\"B\u0103l\u021bi\",\"AN\":\"Anenii Noi\",\"BS\":\"Basarabeasca\",\"BR\":\"Briceni\",\"CH\":\"Cahul\",\"CT\":\"Cantemir\",\"CL\":\"C\u0103l\u0103ra\u0219i\",\"CS\":\"C\u0103u\u0219eni\",\"CM\":\"Cimi\u0219lia\",\"CR\":\"Criuleni\",\"DN\":\"Dondu\u0219eni\",\"DR\":\"Drochia\",\"DB\":\"Dub\u0103sari\",\"ED\":\"Edine\u021b\",\"FL\":\"F\u0103le\u0219ti\",\"FR\":\"Flore\u0219ti\",\"GE\":\"UTA G\u0103g\u0103uzia\",\"GL\":\"Glodeni\",\"HN\":\"H\u00eence\u0219ti\",\"IL\":\"Ialoveni\",\"LV\":\"Leova\",\"NS\":\"Nisporeni\",\"OC\":\"Ocni\u021ba\",\"OR\":\"Orhei\",\"RZ\":\"Rezina\",\"RS\":\"R\u00ee\u0219cani\",\"SG\":\"S\u00eengerei\",\"SR\":\"Soroca\",\"ST\":\"Str\u0103\u0219eni\",\"SD\":\"\u0218old\u0103ne\u0219ti\",\"SV\":\"\u0218tefan Vod\u0103\",\"TR\":\"Taraclia\",\"TL\":\"Telene\u0219ti\",\"UN\":\"Ungheni\"},\"MQ\":[],\"MT\":[],\"MX\":{\"DF\":\"Ciudad de M\u00e9xico\",\"JA\":\"Jalisco\",\"NL\":\"Nuevo Le\u00f3n\",\"AG\":\"Aguascalientes\",\"BC\":\"Baja California\",\"BS\":\"Baja California Sur\",\"CM\":\"Campeche\",\"CS\":\"Chiapas\",\"CH\":\"Chihuahua\",\"CO\":\"Coahuila\",\"CL\":\"Colima\",\"DG\":\"Durango\",\"GT\":\"Guanajuato\",\"GR\":\"Guerrero\",\"HG\":\"Hidalgo\",\"MX\":\"Estado de M\u00e9xico\",\"MI\":\"Michoac\u00e1n\",\"MO\":\"Morelos\",\"NA\":\"Nayarit\",\"OA\":\"Oaxaca\",\"PU\":\"Puebla\",\"QT\":\"Quer\u00e9taro\",\"QR\":\"Quintana Roo\",\"SL\":\"San Luis Potos\u00ed\",\"SI\":\"Sinaloa\",\"SO\":\"Sonora\",\"TB\":\"Tabasco\",\"TM\":\"Tamaulipas\",\"TL\":\"Tlaxcala\",\"VE\":\"Veracruz\",\"YU\":\"Yucat\u00e1n\",\"ZA\":\"Zacatecas\"},\"MY\":{\"JHR\":\"Johor\",\"KDH\":\"Kedah\",\"KTN\":\"Kelantan\",\"LBN\":\"Labuan\",\"MLK\":\"Malacca (Melaka)\",\"NSN\":\"Negeri Sembilan\",\"PHG\":\"Pahang\",\"PNG\":\"Penang (Pulau Pinang)\",\"PRK\":\"Perak\",\"PLS\":\"Perlis\",\"SBH\":\"Sabah\",\"SWK\":\"Sarawak\",\"SGR\":\"Selangor\",\"TRG\":\"Terengganu\",\"PJY\":\"Putrajaya\",\"KUL\":\"Kuala Lumpur\"},\"NG\":{\"AB\":\"Abia\",\"FC\":\"Abuja\",\"AD\":\"Adamawa\",\"AK\":\"Akwa Ibom\",\"AN\":\"Anambra\",\"BA\":\"Bauchi\",\"BY\":\"Bayelsa\",\"BE\":\"Benue\",\"BO\":\"Borno\",\"CR\":\"Cross River\",\"DE\":\"Delta\",\"EB\":\"Ebonyi\",\"ED\":\"Edo\",\"EK\":\"Ekiti\",\"EN\":\"Enugu\",\"GO\":\"Gombe\",\"IM\":\"Imo\",\"JI\":\"Jigawa\",\"KD\":\"Kaduna\",\"KN\":\"Kano\",\"KT\":\"Katsina\",\"KE\":\"Kebbi\",\"KO\":\"Kogi\",\"KW\":\"Kwara\",\"LA\":\"Lagos\",\"NA\":\"Nasarawa\",\"NI\":\"Niger\",\"OG\":\"Ogun\",\"ON\":\"Ondo\",\"OS\":\"Osun\",\"OY\":\"Oyo\",\"PL\":\"Plateau\",\"RI\":\"Rivers\",\"SO\":\"Sokoto\",\"TA\":\"Taraba\",\"YO\":\"Yobe\",\"ZA\":\"Zamfara\"},\"NL\":[],\"NO\":[],\"NP\":{\"BAG\":\"Bagmati\",\"BHE\":\"Bheri\",\"DHA\":\"Dhaulagiri\",\"GAN\":\"Gandaki\",\"JAN\":\"Janakpur\",\"KAR\":\"Karnali\",\"KOS\":\"Koshi\",\"LUM\":\"Lumbini\",\"MAH\":\"Mahakali\",\"MEC\":\"Mechi\",\"NAR\":\"Narayani\",\"RAP\":\"Rapti\",\"SAG\":\"Sagarmatha\",\"SET\":\"Seti\"},\"NZ\":{\"NL\":\"Northland\",\"AK\":\"Auckland\",\"WA\":\"Waikato\",\"BP\":\"Bay of Plenty\",\"TK\":\"Taranaki\",\"GI\":\"Gisborne\",\"HB\":\"Hawke\u2019s Bay\",\"MW\":\"Manawatu-Wanganui\",\"WE\":\"Wellington\",\"NS\":\"Nelson\",\"MB\":\"Marlborough\",\"TM\":\"Tasman\",\"WC\":\"West Coast\",\"CT\":\"Canterbury\",\"OT\":\"Otago\",\"SL\":\"Southland\"},\"PE\":{\"CAL\":\"El Callao\",\"LMA\":\"Municipalidad Metropolitana de Lima\",\"AMA\":\"Amazonas\",\"ANC\":\"Ancash\",\"APU\":\"Apur\u00edmac\",\"ARE\":\"Arequipa\",\"AYA\":\"Ayacucho\",\"CAJ\":\"Cajamarca\",\"CUS\":\"Cusco\",\"HUV\":\"Huancavelica\",\"HUC\":\"Hu\u00e1nuco\",\"ICA\":\"Ica\",\"JUN\":\"Jun\u00edn\",\"LAL\":\"La Libertad\",\"LAM\":\"Lambayeque\",\"LIM\":\"Lima\",\"LOR\":\"Loreto\",\"MDD\":\"Madre de Dios\",\"MOQ\":\"Moquegua\",\"PAS\":\"Pasco\",\"PIU\":\"Piura\",\"PUN\":\"Puno\",\"SAM\":\"San Mart\u00edn\",\"TAC\":\"Tacna\",\"TUM\":\"Tumbes\",\"UCA\":\"Ucayali\"},\"PH\":{\"ABR\":\"Abra\",\"AGN\":\"Agusan del Norte\",\"AGS\":\"Agusan del Sur\",\"AKL\":\"Aklan\",\"ALB\":\"Albay\",\"ANT\":\"Antique\",\"APA\":\"Apayao\",\"AUR\":\"Aurora\",\"BAS\":\"Basilan\",\"BAN\":\"Bataan\",\"BTN\":\"Batanes\",\"BTG\":\"Batangas\",\"BEN\":\"Benguet\",\"BIL\":\"Biliran\",\"BOH\":\"Bohol\",\"BUK\":\"Bukidnon\",\"BUL\":\"Bulacan\",\"CAG\":\"Cagayan\",\"CAN\":\"Camarines Norte\",\"CAS\":\"Camarines Sur\",\"CAM\":\"Camiguin\",\"CAP\":\"Capiz\",\"CAT\":\"Catanduanes\",\"CAV\":\"Cavite\",\"CEB\":\"Cebu\",\"COM\":\"Compostela Valley\",\"NCO\":\"Cotabato\",\"DAV\":\"Davao del Norte\",\"DAS\":\"Davao del Sur\",\"DAC\":\"Davao Occidental\",\"DAO\":\"Davao Oriental\",\"DIN\":\"Dinagat Islands\",\"EAS\":\"Eastern Samar\",\"GUI\":\"Guimaras\",\"IFU\":\"Ifugao\",\"ILN\":\"Ilocos Norte\",\"ILS\":\"Ilocos Sur\",\"ILI\":\"Iloilo\",\"ISA\":\"Isabela\",\"KAL\":\"Kalinga\",\"LUN\":\"La Union\",\"LAG\":\"Laguna\",\"LAN\":\"Lanao del Norte\",\"LAS\":\"Lanao del Sur\",\"LEY\":\"Leyte\",\"MAG\":\"Maguindanao\",\"MAD\":\"Marinduque\",\"MAS\":\"Masbate\",\"MSC\":\"Misamis Occidental\",\"MSR\":\"Misamis Oriental\",\"MOU\":\"Mountain Province\",\"NEC\":\"Negros Occidental\",\"NER\":\"Negros Oriental\",\"NSA\":\"Northern Samar\",\"NUE\":\"Nueva Ecija\",\"NUV\":\"Nueva Vizcaya\",\"MDC\":\"Occidental Mindoro\",\"MDR\":\"Oriental Mindoro\",\"PLW\":\"Palawan\",\"PAM\":\"Pampanga\",\"PAN\":\"Pangasinan\",\"QUE\":\"Quezon\",\"QUI\":\"Quirino\",\"RIZ\":\"Rizal\",\"ROM\":\"Romblon\",\"WSA\":\"Samar\",\"SAR\":\"Sarangani\",\"SIQ\":\"Siquijor\",\"SOR\":\"Sorsogon\",\"SCO\":\"South Cotabato\",\"SLE\":\"Southern Leyte\",\"SUK\":\"Sultan Kudarat\",\"SLU\":\"Sulu\",\"SUN\":\"Surigao del Norte\",\"SUR\":\"Surigao del Sur\",\"TAR\":\"Tarlac\",\"TAW\":\"Tawi-Tawi\",\"ZMB\":\"Zambales\",\"ZAN\":\"Zamboanga del Norte\",\"ZAS\":\"Zamboanga del Sur\",\"ZSI\":\"Zamboanga Sibugay\",\"00\":\"Metro Manila\"},\"PK\":{\"JK\":\"Azad Kashmir\",\"BA\":\"Balochistan\",\"TA\":\"FATA\",\"GB\":\"Gilgit Baltistan\",\"IS\":\"Islamabad Capital Territory\",\"KP\":\"Khyber Pakhtunkhwa\",\"PB\":\"Punjab\",\"SD\":\"Sindh\"},\"PL\":[],\"PT\":[],\"PY\":{\"PY-ASU\":\"Asunci\u00f3n\",\"PY-1\":\"Concepci\u00f3n\",\"PY-2\":\"San Pedro\",\"PY-3\":\"Cordillera\",\"PY-4\":\"Guair\u00e1\",\"PY-5\":\"Caaguaz\u00fa\",\"PY-6\":\"Caazap\u00e1\",\"PY-7\":\"Itap\u00faa\",\"PY-8\":\"Misiones\",\"PY-9\":\"Paraguar\u00ed\",\"PY-10\":\"Alto Paran\u00e1\",\"PY-11\":\"Central\",\"PY-12\":\"\u00d1eembuc\u00fa\",\"PY-13\":\"Amambay\",\"PY-14\":\"Canindey\u00fa\",\"PY-15\":\"Presidente Hayes\",\"PY-16\":\"Alto Paraguay\",\"PY-17\":\"Boquer\u00f3n\"},\"RE\":[],\"RO\":{\"AB\":\"Alba\",\"AR\":\"Arad\",\"AG\":\"Arge\u0219\",\"BC\":\"Bac\u0103u\",\"BH\":\"Bihor\",\"BN\":\"Bistri\u021ba-N\u0103s\u0103ud\",\"BT\":\"Boto\u0219ani\",\"BR\":\"Br\u0103ila\",\"BV\":\"Bra\u0219ov\",\"B\":\"Bucure\u0219ti\",\"BZ\":\"Buz\u0103u\",\"CL\":\"C\u0103l\u0103ra\u0219i\",\"CS\":\"Cara\u0219-Severin\",\"CJ\":\"Cluj\",\"CT\":\"Constan\u021ba\",\"CV\":\"Covasna\",\"DB\":\"D\u00e2mbovi\u021ba\",\"DJ\":\"Dolj\",\"GL\":\"Gala\u021bi\",\"GR\":\"Giurgiu\",\"GJ\":\"Gorj\",\"HR\":\"Harghita\",\"HD\":\"Hunedoara\",\"IL\":\"Ialomi\u021ba\",\"IS\":\"Ia\u0219i\",\"IF\":\"Ilfov\",\"MM\":\"Maramure\u0219\",\"MH\":\"Mehedin\u021bi\",\"MS\":\"Mure\u0219\",\"NT\":\"Neam\u021b\",\"OT\":\"Olt\",\"PH\":\"Prahova\",\"SJ\":\"S\u0103laj\",\"SM\":\"Satu Mare\",\"SB\":\"Sibiu\",\"SV\":\"Suceava\",\"TR\":\"Teleorman\",\"TM\":\"Timi\u0219\",\"TL\":\"Tulcea\",\"VL\":\"V\u00e2lcea\",\"VS\":\"Vaslui\",\"VN\":\"Vrancea\"},\"RS\":[],\"SG\":[],\"SK\":[],\"SI\":[],\"TH\":{\"TH-37\":\"Amnat Charoen\",\"TH-15\":\"Ang Thong\",\"TH-14\":\"Ayutthaya\",\"TH-10\":\"Bangkok\",\"TH-38\":\"Bueng Kan\",\"TH-31\":\"Buri Ram\",\"TH-24\":\"Chachoengsao\",\"TH-18\":\"Chai Nat\",\"TH-36\":\"Chaiyaphum\",\"TH-22\":\"Chanthaburi\",\"TH-50\":\"Chiang Mai\",\"TH-57\":\"Chiang Rai\",\"TH-20\":\"Chonburi\",\"TH-86\":\"Chumphon\",\"TH-46\":\"Kalasin\",\"TH-62\":\"Kamphaeng Phet\",\"TH-71\":\"Kanchanaburi\",\"TH-40\":\"Khon Kaen\",\"TH-81\":\"Krabi\",\"TH-52\":\"Lampang\",\"TH-51\":\"Lamphun\",\"TH-42\":\"Loei\",\"TH-16\":\"Lopburi\",\"TH-58\":\"Mae Hong Son\",\"TH-44\":\"Maha Sarakham\",\"TH-49\":\"Mukdahan\",\"TH-26\":\"Nakhon Nayok\",\"TH-73\":\"Nakhon Pathom\",\"TH-48\":\"Nakhon Phanom\",\"TH-30\":\"Nakhon Ratchasima\",\"TH-60\":\"Nakhon Sawan\",\"TH-80\":\"Nakhon Si Thammarat\",\"TH-55\":\"Nan\",\"TH-96\":\"Narathiwat\",\"TH-39\":\"Nong Bua Lam Phu\",\"TH-43\":\"Nong Khai\",\"TH-12\":\"Nonthaburi\",\"TH-13\":\"Pathum Thani\",\"TH-94\":\"Pattani\",\"TH-82\":\"Phang Nga\",\"TH-93\":\"Phatthalung\",\"TH-56\":\"Phayao\",\"TH-67\":\"Phetchabun\",\"TH-76\":\"Phetchaburi\",\"TH-66\":\"Phichit\",\"TH-65\":\"Phitsanulok\",\"TH-54\":\"Phrae\",\"TH-83\":\"Phuket\",\"TH-25\":\"Prachin Buri\",\"TH-77\":\"Prachuap Khiri Khan\",\"TH-85\":\"Ranong\",\"TH-70\":\"Ratchaburi\",\"TH-21\":\"Rayong\",\"TH-45\":\"Roi Et\",\"TH-27\":\"Sa Kaeo\",\"TH-47\":\"Sakon Nakhon\",\"TH-11\":\"Samut Prakan\",\"TH-74\":\"Samut Sakhon\",\"TH-75\":\"Samut Songkhram\",\"TH-19\":\"Saraburi\",\"TH-91\":\"Satun\",\"TH-17\":\"Sing Buri\",\"TH-33\":\"Sisaket\",\"TH-90\":\"Songkhla\",\"TH-64\":\"Sukhothai\",\"TH-72\":\"Suphan Buri\",\"TH-84\":\"Surat Thani\",\"TH-32\":\"Surin\",\"TH-63\":\"Tak\",\"TH-92\":\"Trang\",\"TH-23\":\"Trat\",\"TH-34\":\"Ubon Ratchathani\",\"TH-41\":\"Udon Thani\",\"TH-61\":\"Uthai Thani\",\"TH-53\":\"Uttaradit\",\"TH-95\":\"Yala\",\"TH-35\":\"Yasothon\"},\"TR\":{\"TR01\":\"Adana\",\"TR02\":\"Ad\u0131yaman\",\"TR03\":\"Afyon\",\"TR04\":\"A\u011fr\u0131\",\"TR05\":\"Amasya\",\"TR06\":\"Ankara\",\"TR07\":\"Antalya\",\"TR08\":\"Artvin\",\"TR09\":\"Ayd\u0131n\",\"TR10\":\"Bal\u0131kesir\",\"TR11\":\"Bilecik\",\"TR12\":\"Bing\u00f6l\",\"TR13\":\"Bitlis\",\"TR14\":\"Bolu\",\"TR15\":\"Burdur\",\"TR16\":\"Bursa\",\"TR17\":\"\u00c7anakkale\",\"TR18\":\"\u00c7ank\u0131r\u0131\",\"TR19\":\"\u00c7orum\",\"TR20\":\"Denizli\",\"TR21\":\"Diyarbak\u0131r\",\"TR22\":\"Edirne\",\"TR23\":\"Elaz\u0131\u011f\",\"TR24\":\"Erzincan\",\"TR25\":\"Erzurum\",\"TR26\":\"Eski\u015fehir\",\"TR27\":\"Gaziantep\",\"TR28\":\"Giresun\",\"TR29\":\"G\u00fcm\u00fc\u015fhane\",\"TR30\":\"Hakkari\",\"TR31\":\"Hatay\",\"TR32\":\"Isparta\",\"TR33\":\"\u0130\u00e7el\",\"TR34\":\"\u0130stanbul\",\"TR35\":\"\u0130zmir\",\"TR36\":\"Kars\",\"TR37\":\"Kastamonu\",\"TR38\":\"Kayseri\",\"TR39\":\"K\u0131rklareli\",\"TR40\":\"K\u0131r\u015fehir\",\"TR41\":\"Kocaeli\",\"TR42\":\"Konya\",\"TR43\":\"K\u00fctahya\",\"TR44\":\"Malatya\",\"TR45\":\"Manisa\",\"TR46\":\"Kahramanmara\u015f\",\"TR47\":\"Mardin\",\"TR48\":\"Mu\u011fla\",\"TR49\":\"Mu\u015f\",\"TR50\":\"Nev\u015fehir\",\"TR51\":\"Ni\u011fde\",\"TR52\":\"Ordu\",\"TR53\":\"Rize\",\"TR54\":\"Sakarya\",\"TR55\":\"Samsun\",\"TR56\":\"Siirt\",\"TR57\":\"Sinop\",\"TR58\":\"Sivas\",\"TR59\":\"Tekirda\u011f\",\"TR60\":\"Tokat\",\"TR61\":\"Trabzon\",\"TR62\":\"Tunceli\",\"TR63\":\"\u015eanl\u0131urfa\",\"TR64\":\"U\u015fak\",\"TR65\":\"Van\",\"TR66\":\"Yozgat\",\"TR67\":\"Zonguldak\",\"TR68\":\"Aksaray\",\"TR69\":\"Bayburt\",\"TR70\":\"Karaman\",\"TR71\":\"K\u0131r\u0131kkale\",\"TR72\":\"Batman\",\"TR73\":\"\u015e\u0131rnak\",\"TR74\":\"Bart\u0131n\",\"TR75\":\"Ardahan\",\"TR76\":\"I\u011fd\u0131r\",\"TR77\":\"Yalova\",\"TR78\":\"Karab\u00fck\",\"TR79\":\"Kilis\",\"TR80\":\"Osmaniye\",\"TR81\":\"D\u00fczce\"},\"TZ\":{\"TZ01\":\"Arusha\",\"TZ02\":\"Dar es Salaam\",\"TZ03\":\"Dodoma\",\"TZ04\":\"Iringa\",\"TZ05\":\"Kagera\",\"TZ06\":\"Pemba North\",\"TZ07\":\"Zanzibar North\",\"TZ08\":\"Kigoma\",\"TZ09\":\"Kilimanjaro\",\"TZ10\":\"Pemba South\",\"TZ11\":\"Zanzibar South\",\"TZ12\":\"Lindi\",\"TZ13\":\"Mara\",\"TZ14\":\"Mbeya\",\"TZ15\":\"Zanzibar West\",\"TZ16\":\"Morogoro\",\"TZ17\":\"Mtwara\",\"TZ18\":\"Mwanza\",\"TZ19\":\"Coast\",\"TZ20\":\"Rukwa\",\"TZ21\":\"Ruvuma\",\"TZ22\":\"Shinyanga\",\"TZ23\":\"Singida\",\"TZ24\":\"Tabora\",\"TZ25\":\"Tanga\",\"TZ26\":\"Manyara\",\"TZ27\":\"Geita\",\"TZ28\":\"Katavi\",\"TZ29\":\"Njombe\",\"TZ30\":\"Simiyu\"},\"LK\":[],\"SE\":[],\"US\":{\"AL\":\"Alabama\",\"AK\":\"Alaska\",\"AZ\":\"Arizona\",\"AR\":\"Arkansas\",\"CA\":\"California\",\"CO\":\"Colorado\",\"CT\":\"Connecticut\",\"DE\":\"Delaware\",\"DC\":\"District Of Columbia\",\"FL\":\"Florida\",\"GA\":\"Georgia\",\"HI\":\"Hawaii\",\"ID\":\"Idaho\",\"IL\":\"Illinois\",\"IN\":\"Indiana\",\"IA\":\"Iowa\",\"KS\":\"Kansas\",\"KY\":\"Kentucky\",\"LA\":\"Louisiana\",\"ME\":\"Maine\",\"MD\":\"Maryland\",\"MA\":\"Massachusetts\",\"MI\":\"Michigan\",\"MN\":\"Minnesota\",\"MS\":\"Mississippi\",\"MO\":\"Missouri\",\"MT\":\"Montana\",\"NE\":\"Nebraska\",\"NV\":\"Nevada\",\"NH\":\"New Hampshire\",\"NJ\":\"New Jersey\",\"NM\":\"New Mexico\",\"NY\":\"New York\",\"NC\":\"North Carolina\",\"ND\":\"North Dakota\",\"OH\":\"Ohio\",\"OK\":\"Oklahoma\",\"OR\":\"Oregon\",\"PA\":\"Pennsylvania\",\"RI\":\"Rhode Island\",\"SC\":\"South Carolina\",\"SD\":\"South Dakota\",\"TN\":\"Tennessee\",\"TX\":\"Texas\",\"UT\":\"Utah\",\"VT\":\"Vermont\",\"VA\":\"Virginia\",\"WA\":\"Washington\",\"WV\":\"West Virginia\",\"WI\":\"Wisconsin\",\"WY\":\"Wyoming\",\"AA\":\"Armed Forces (AA)\",\"AE\":\"Armed Forces (AE)\",\"AP\":\"Armed Forces (AP)\"},\"VN\":[],\"YT\":[],\"ZA\":{\"EC\":\"Eastern Cape\",\"FS\":\"Free State\",\"GP\":\"Gauteng\",\"KZN\":\"KwaZulu-Natal\",\"LP\":\"Limpopo\",\"MP\":\"Mpumalanga\",\"NC\":\"Northern Cape\",\"NW\":\"North West\",\"WC\":\"Western Cape\"}}","password_strength":{"min_password_strength":3,"i18n_password_error":"Please enter a stronger password.","i18n_password_hint":"Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! &quot; ? $ % ^ &amp; )."}};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/easy-login-woocommerce/xoo-form-fields-fw/assets/js/xoo-aff-js.js?ver=1.1' id='xoo-aff-js-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/easy-login-woocommerce/library/smooth-scrollbar/smooth-scrollbar.js?ver=2.1' id='smooth-scrollbar-js'></script>
<script type='text/javascript' id='xoo-el-js-js-extra'>
/* <![CDATA[ */
var xoo_el_localize = {"adminurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","redirectDelay":"300","html":{"spinner":"<i class=\"fas fa-circle-notch spinner fa-spin\" aria-hidden=\"true\"><\/i>"},"autoOpenPopup":"no","autoOpenPopupOnce":"no","aoDelay":"500"};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/easy-login-woocommerce/assets/js/xoo-el-js.js?ver=2.1' id='xoo-el-js-js'></script>
<script type='text/javascript' id='xoo-sl-fb-sdk-js-extra'>
/* <![CDATA[ */
var xoo_sl_fb_localize = {"adminurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","appID":"358682362568424"};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/social-login-woocommerce/assets/js/facebook/facebook-sdk.js?ver=1.1' id='xoo-sl-fb-sdk-js'></script>
<script type='text/javascript' id='xoo-sl-google-sdk-js-extra'>
/* <![CDATA[ */
var xoo_sl_google_localize = {"adminurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","clientID":"400613850728-me5i3auji94emsqjhu9q67vbmhocc7ve.apps.googleusercontent.com"};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/social-login-woocommerce/assets/js/google/google-sdk.js?ver=1.1' id='xoo-sl-google-sdk-js'></script>
<script type='text/javascript' id='xoo-sl-js-js-extra'>
/* <![CDATA[ */
var xoo_sl_localize = {"adminurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","redirect_to":"\/en\/"};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/social-login-woocommerce/assets/js/xoo-sl-js.js?ver=1.1' id='xoo-sl-js-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-includes/js/comment-reply.min.js?ver=5.8.2' id='comment-reply-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/themes/hestia/assets/bootstrap/js/bootstrap.min.js?ver=1.0.2' id='jquery-bootstrap-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-includes/js/jquery/ui/core.min.js?ver=1.12.1' id='jquery-ui-core-js'></script>
<script type='text/javascript' id='hestia_scripts-js-extra'>
/* <![CDATA[ */
var requestpost = {"ajaxurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","disable_autoslide":"","masonry":""};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/themes/hestia/assets/js/script.min.js?ver=3.0.19' id='hestia_scripts-js'></script>
<script type='text/javascript' id='wp-ppec-frontend-script-js-extra'>
/* <![CDATA[ */
var ppecFrontVars = {"str":{"errorOccurred":"Error occurred","paymentFor":"Payment for","enterQuantity":"Please enter a valid quantity","enterAmount":"Please enter a valid amount","acceptTos":"Please accept the terms and conditions","paymentCompleted":"Payment Completed","redirectMsg":"You are now being redirected to the order summary page.","strRemoveCoupon":"Remove coupon","strRemove":"Remove"},"ajaxUrl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/wp-express-checkout/assets/js/public.min.js?ver=2.1.5' id='wp-ppec-frontend-script-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-includes/js/wp-embed.min.js?ver=5.8.2' id='wp-embed-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/wpforms-lite/assets/js/jquery.validate.min.js?ver=1.19.3' id='wpforms-validation-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/wpforms-lite/assets/js/mailcheck.min.js?ver=1.1.2' id='wpforms-mailcheck-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/wpforms-lite/assets/js/punycode.min.js?ver=1.0.0' id='wpforms-punycode-js'></script>
<script type='text/javascript' src='https://t-speaker.com/en/wp-content/plugins/wpforms-lite/assets/js/wpforms.js?ver=1.7.1.2' id='wpforms-js'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wpforms_settings = {"val_required":"This field is required.","val_email":"Please enter a valid email address.","val_email_suggestion":"Did you mean {suggestion}?","val_email_suggestion_title":"Click to accept this suggestion.","val_email_restricted":"This email address is not allowed.","val_number":"Please enter a valid number.","val_number_positive":"Please enter a valid positive number.","val_confirm":"Field values do not match.","val_checklimit":"You have exceeded the number of allowed selections: {#}.","val_limit_characters":"{count} of {limit} max characters.","val_limit_words":"{count} of {limit} max words.","val_recaptcha_fail_msg":"Google reCAPTCHA verification failed, please try again later.","val_empty_blanks":"Please fill out all blanks.","uuid_cookie":"","locale":"en","wpforms_plugin_url":"https:\/\/t-speaker.com\/en\/wp-content\/plugins\/wpforms-lite\/","gdpr":"","ajaxurl":"https:\/\/t-speaker.com\/en\/wp-admin\/admin-ajax.php","mailcheck_enabled":"1","mailcheck_domains":[],"mailcheck_toplevel_domains":["dev"],"is_ssl":"1"}
/* ]]> */
</script>
/**
* @fileOverview Javascript Utility ����
* @author AjaxUI Lab.
*/

/**
* �������ڷ� ���� elOldElement�� ������ ������Ʈ�� ���� �� �� ������ sNewHTML�� ä���� ��ȯ
* ���� ������ ������Ʈ�� elOldElement�� id�� class �Ӽ����� �״�� �����Ѵ�.
* @name		replaceHTML
* @function
* @param 	{HTML Element} 	elOldElement 	���� ���� ��� ������Ʈ
* @param 	{String} 			sNewHTML 	���� �� ����� HTML ���ڿ�
* @returns 	{HTML Element} 				���ο� HTML�� ����� ������Ʈ 
* @example
* <style>.sample_position {position:absolute; top:200px; left:-500px; width:200px; height:100px; border:1px solid #00FF00;}</style>
*
* <div id="sample_code" style="border:1px solid #FF0000;" class="sample_position"></div>
*
* <script type="text/javascript">
* 	var elOldElement = document.getElementById("sample_code");
* 	var sNewHTML = "<div style=\"position: relative; top:10px; left:10px; width:100px; height:50px; border:1px solid #0000FF;\"></div>";
* 	var elNewElement = replaceHTML(elOldElement, sNewHTML);
* </script>
*
* // ���: elNewElement�� �Ʒ��� �����ϴ�.
* // <div id="sample_code" class="sample_position">
* // 	  <div style=\"position: relative; top:10px; left:10px; width:100px; height:50px; border:1px solid #0000FF;\"></div>
* // </div>
*/
function replaceHTML(elOldElement, sNewHTML){
	if(!elOldElement || !elOldElement.nodeName){
		return;
	}
	var elNewElement = document.createElement(elOldElement.nodeName);
	if(elOldElement.id){
		elNewElement.id = elOldElement.id;
	}
	if(elOldElement.className){
		elNewElement.className = elOldElement.className;
	}
	elNewElement.innerHTML = sNewHTML || "";
	elOldElement.parentNode.replaceChild(elNewElement, elOldElement);
	
	return elNewElement;
}

/**
* sString �� ����(2�� �̻�)�� <a href="http://www.w3schools.com/tags/ref_entities.asp" target="entitycode">HTML Entity Code</a>�� �����Ͽ� ��ȯ
* @name		replaceWhiteSpace
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			����� ���ڿ�
* @see		restoreWhiteSpace
* @see		restoreAllSpecialChar
* @example
* replaceWhiteSpace() or replaceWhiteSpace(123)
* // ���: ""
*
* //������ �ϳ��� ���
* replaceWhiteSpace("example code") 
* // ���: example code
*
* //������ �ΰ��� ���
* replaceWhiteSpace("example  code") 
* // ���: example&amp;nbsp;&amp;nbsp;code
*
* //������ ������ ���
* replaceWhiteSpace("example   code")
* // ���: example&amp;nbsp;&amp;nbsp; code
*/
function replaceWhiteSpace(sString){
	return (typeof(sString) == "string") ? sString.replace(/\s{2}/g, "&nbsp;&nbsp;") : "";
}

/**
* sString �� <a href="http://www.w3schools.com/tags/ref_entities.asp" target="entitycode">HTML Entity Code</a>�� �� ���鹮�ڸ� �Ϲ� �������� �����Ͽ� ��ȯ
* @name 		restoreWhiteSpace
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			����� ���ڿ�
* @see		restoreAllSpecialChar
* @see 		replaceWhiteSpace
* @example
* restoreWhiteSpace() or restoreWhiteSpace(123)
* // ���: ""
*
* restoreWhiteSpace("example&amp;nbsp;code") 
* // ���: example code
*/
function restoreWhiteSpace(sString){
	return (typeof(sString) == "string") ? sString.replace(/\&nbsp\;/g, " ") : "";
}

/**
* sString �� �޷�($) ���ڸ� <a href="http://www.w3schools.com/tags/ref_entities.asp" target="entitycode">HTML Entity Code</a>�� �����Ͽ� ��ȯ
* @name		replaceDollarSign
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			����� ���ڿ�
* @see		restoreAllSpecialChar
* @example
* replaceDollarSign() or replaceDollarSign(123)
* // ���: ""
*
* replaceDollarSign("It's $100")
* // ���: It's &amp;#36;100
*/
function replaceDollarSign(sString){
	return (typeof(sString) == "string") ? sString.replace(/\$/g, "&#36;") : "";
}

/**
* ���ڿ�(sString) �� 5���� Ư������(", ', &, <, >)�� <a href="http://www.w3schools.com/tags/ref_entities.asp" target="entitycode">HTML Entity Code</a>�� �����Ͽ� ��ȯ
* @name		replaceSpecialChar
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			����� ���ڿ�
* @see		restoreSpecialChar
* @see		restoreAllSpecialChar
* @example
* replaceSpecialChar() or replaceSpecialChar(123)
* // ���: ""
*
* replaceSpecialChar("&quot;, ', &, <, >")
* // ���: &amp;quot;, &amp;#39;, &amp;amp;, &amp;lt;, &amp;gt;
*/
function replaceSpecialChar(sString){
	return (typeof(sString) == "string") ? (sString.replace(/\&/g, "&amp;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;").replace(/</g, "&lt;").replace(/\>/g, "&gt;")) : "";
}

/**
* ���ڿ�(sString) �� <a href="http://www.w3schools.com/tags/ref_entities.asp" target="entitycode">HTML Entity Code</a>�� �� Ư������ 5���� ������ ����(", ', &, <, >)�� �����Ͽ� ��ȯ
* @name		restoreSpecialChar
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			����� ���ڿ�
* @see		replaceSpecialChar
* @see		restoreAllSpecialChar
* @example
* restoreSpecialChar() or restoreSpecialChar(123)
* // ���: ""
*
* restoreSpecialChar("&amp;quot;, &amp;#39;, &amp;amp;, &amp;lt;, &amp;gt;")
* // ���: ", ', &, <, >
*/
function restoreSpecialChar(sString){
	return (typeof(sString) == "string") ? (sString.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")) : "";
}

/**
* �������ڷ� ���� ���ڿ�(sString) �� ��� <a href="http://www.w3schools.com/tags/ref_entities.asp" target="entitycode">HTML Entity Code</a>��  innerHTML/innerText �� ��ȣ�ۿ��� �̿��Ͽ� ������ ���ڷ� ���� �� ��ȯ
* �������ڷ� HTML�� ���� ��� innerText�� ���� HTML�� ������ Text�� ��ȯ�Ѵ�. 
* @name		restoreAllSpecialChar
* @function
* @param 	{String} 	sString 	HTML Entity Code�� ���Ե� ���ڿ�
* @returns 	{String} 			������ ���ڷ� ����� Text ���ڿ�(HTML ����)
* @see		replaceSpecialChar
* @see		restoreSpecialChar
* @see		replaceDollarSign
* @see		replaceWhiteSpace
* @see		restoreWhiteSpace
* @example
* restoreAllSpecialChar("&amp;quot;, &amp;#39;, &amp;amp;, &amp;lt;, &amp;gt;, &amp;nbsp;, more...")
* // ���: ", ', &, <, >, , more...
*
* restoreAllSpecialChar("&amp;#34;, &amp;#39;, &amp;#38;, &amp;#60;, &amp;#62;, &amp;#160;, more...")
* // ���: ", ', &, <, >, , more...
*/
function restoreAllSpecialChar(sString){
	var elDummy = document.createElement('div');
	elDummy.innerHTML = sString;
	
	try{
		return elDummy.textContent || elDummy.innerText;
	}finally{
		elDummy = null;
	}
}
	
/**
* sString �� ��� ��ũ��Ʈ ����� �����Ͽ� ��ȯ
* @name		stripScripts
* @function
* @param 	{String} 	sText  	���� ���ڿ�
* @returns 	{String} 			��ũ��Ʈ�� ���ŵ� ���ڿ�
* @see		extractScripts
* @see		evaluateScripts
* @see		stripHTML
* @example
* stripScripts() or stripScripts(123) 
* // ���: ""
*
* stripScripts("<div><script>alert(1);</script></div>")
* // ���: "<div></div>"
*
* stripScripts("<div><script type='text/javascript'>alert(2);</script></div>")
* // ���: "<div></div>"
*/
function stripScripts(sString){
	return (typeof sString == "string") ? sString.replace(/<script[^>]*>([\S\s]*?)<\/script>/img, '') : "";
}

/**
* sString �� ��� ��ũ��Ʈ ����� �����Ͽ� �迭�� ��ȯ
* @name		extractScripts
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{Array} 			����� ��ũ��Ʈ ����� ��� �迭
* @see 		stripScripts
* @see		evaluateScripts
* @example
* extractScripts()  or extractScripts(123) 
* // ���: []
*
* extractScripts("<div><script>alert(1);</script></div>")
* // ���: ["<script>alert(1);</script>"]
*
* extractScripts("<div><script type='text/javascript'>alert(2);</script></div>")
* // ���: ["<script type='text/javascript'>alert(2);</script>"]
*
* extractScripts("<div><script>alert(3);</script><script type='text/javascript'>alert(4);</script></div>")
* // ���: ["<script>alert(3);</script>", "<script type='text/javascript'>alert(4);</script>"]
*/
function extractScripts(sString){
	return (typeof sString == "string") ? (sString.match(/<script[^>]*>([\S\s]*?)<\/script>/img) || []) : [];
}

/**
* sString �� ��� ��ũ��Ʈ ����� �����Ͽ� ����� ������� �� ������ ����
* @name		evaluateScripts
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @requires 	extractScripts
* @see		stripScripts
* @see		extractScripts
* @example
* evaluateScripts("<div><script>alert(1);</script></div>")
* // ���: alert(1) ����
*
* evaluateScripts("<div><script type='text/javascript'>alert(2);</script></div>")
* // ���: alert(2) ����
*
* evaluateScripts("<div><script>alert(3);</script><script type='text/javascript'>alert(4);</script></div>")
* // ���: alert(3) ���� �� alert(4) ����
*/
function evaluateScripts(sString){
	var arr = extractScripts(sString);
    var i = 0, nLen = arr.length;

    while(i < nLen){
        eval(arr[i].replace(/<(\/)?script[^>]*>/img,""));
        i++;
    }
}

/**
* sString �� HTML �±׸� ���� 
* @name 		stripHTML
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			���� ���ڿ����� HTML�±׸� ������ ���ڿ�
* @see 		stripScripts
* @example
* stripHTML() or stripHTML(123)
* // ���: ""
*
* stripHTML("<div>This is <strong>stripHTML</strong> Function</div>")
* // ���: "This is stripHTML Function"
*/
function stripHTML(sString){
	return (typeof sString == "string") ? sString.replace(/<(?:.|\s)*?>/g, "") : "";
}

/**
* elRemoveElement �� strong �±׸� �����ϰ�, elAddElement �� strong �±׸� �߰�
* @name		addStrongTag
* @function
* @param 	{HTML Element} 	elAddElement strong 	�±׸� �߰��� ������Ʈ
* @param 	{HTML Element} 	[elRemoveElement] 	strong �±׸� ������ ������Ʈ
* @example
* <span id="text1">Text 1</span> : <span id="text2">Text 2</span>
*
* <script type="text/javascript">
* 	var elText1 = document.getElementById("text1");
* 	var elText2 = document.getElementById("text2");
*
*	// elText1 �� strong �±� ����
* 	addStrongTag(elText1);
* 	// ���: <span id="text1"><strong>Text 1</strong></span> : <span id="text2">Text 2</span>
*
* 	// elText1 �� strong �±� ���� �� elText2 �� strong �±� ����
* 	addStrongTag(elText2, elText1);
* 	// ���: <span id="text1">Text 1</span> : <span id="text2"><strong>Text 2</strong></span>
* </script>
*/
function addStrongTag(elAddElement, elRemoveElement){
	if(!!elRemoveElement && elRemoveElement.nodeName){
		elRemoveElement.innerHTML = elRemoveElement.innerHTML.replace(/<\/?strong>/gi, "");
	}
	if(elAddElement){
		var sNoStrongAddElement = elAddElement.innerHTML.replace(/<\/?strong>/gi, "");
		elAddElement.innerHTML = "<strong>" + sNoStrongAddElement + "</strong>";
	}
}

/**
* ������ selectbox�� option �׸� �߰�
* @name		addSelectboxOption
* @function
* @param 	{HTML Element} 	elSelectbox 		����Ʈ�ڽ� ������Ʈ
* @param 	{String} 			sOptionText 		�߰��� �ɼ��� text ��
* @param 	{String} 			sOptionValue 		�߰��� �ɼ��� value ��
* @param 	{Boolean} 		[bOptionSelected] 	�߰��� �ɼ��� ���õ� ���·� ���� ���� (default: false, true: ����, false: ���� ����)
* @see		removeSelectboxOption
* @example
* <select id="sel"></select>
*
* <script type="text/javascript">
* 	var elSelect = document.getElementById("sel");
*
* 	// options[0]�� <option value="value1" selected="false">text1</option> ����
*	addSelectboxOption(elSelect, "text1", "value1");		
*
*	// options[1]�� <option value="value2" selected="false">text2</option> ����
*	addSelectboxOption(elSelect, "text2", "value2", false);
*
* 	// options[2]�� <option value="value3" selected="true">text3</option> ����
*	addSelectboxOption(elSelect, "text3", "value3", true);
* </script>
*/
function addSelectboxOption(elSelectbox, sOptionText, sOptionValue, bOptionSelected){
	var elNewOption = new Option(sOptionText, sOptionValue, bOptionSelected || false);
	elSelectbox.options[elSelectbox.options.length] = elNewOption;
	elNewOption = null;
}

/**
* ������ selectbox�� option �׸� ����
* @name		removeSelectboxOption
* @function
* @param 	{Element} 	elSelectbox 		����Ʈ�ڽ� ������Ʈ
* @param 	{Number} 	[nOptionIndex] 	������ �ɼ��� �ε��� ��(�������� ���� ��� ��ü ����)
* @see		addSelectboxOption
* @example
* <select id="sel">
* 	<option value="value1">text1</option>	// options[0]
*	<option value="value2">text2</option>	// options[1]
*	<option value="value3">text3</option>	// options[2]
* </select>
*
* <script type="text/javascript">
*	var elSelect = document.getElementById("sel");
*
*	// options[1] �� ����
*	removeSelectboxOption(elSelect, 1); 
*
*	// ��� options �� ���� => options.length = 0
*	removeSelectboxOption(elSelect); 
* </script>
*/
function removeSelectboxOption(elSelectbox, nOptionIndex){
    if(nOptionIndex){
		elSelectbox.options[nOptionIndex] = null;
	}else{
		elSelectbox.options.length = 0;
	}
}

/**
* sString�� nLength ��ŭ�� ���� ���� �ڸ� �� ���� sTail�� �ٿ� ��ȯ
* @name		cutString
* @function
* @param 	{String} 		sString 		���� ���ڿ�
* @param 	{Number} 	nMaxLength 	������ �ִ� length ���� ��
* @param 	{String} 		[sTail] 		���� �� ���� ���� ���ڿ� (default : "")
* @returns 	{String} 					������ ���ڿ�
* @see		cutStringByByte
* @see		cutStringByPixel
* @example
* cutString("abcde �����ٶ� 12345", 10);
* // ���: "abcde �����ٶ�"
*
* cutString("abcde �����ٶ� 12345", 10, "...");
* // ���: "abcde �����ٶ�..."
*/
function cutString(sString, nMaxLength, sTail){
	var sSource = (typeof sString != "String") ? sString.toString() : sString;
	var nLimit = parseInt(nMaxLength, 10);
	var sAdd = sTail || "";
	
	return (sSource.length > nLimit) ? sSource.substring(0, nLimit) + sAdd : sSource;
}

/**
* sString�� nMaxByte ��ŭ�� ũ��� �ڸ� �� ���� sTail�� �ٿ� ��ȯ
* @name 		cutStringByByte
* @function
* @param 	{String} 		sString 		���� ���ڿ�
* @param 	{Number} 	nMaxByte 	������ �ִ� byte ũ��
* @param 	{String} 		[sTail] 		���� �� ���� ���� ���ڿ�
* @returns 	{String} 					������ ���ڿ�
* @see		cutString
* @see		cutStringByPixel
* @see		cutFilenameByByte
* @example
* cutStringByByte("abcde �����ٶ� 12345", 10);
* // ���: "abcde ����"
* 
* cutStringByByte("abcde �����ٶ� 12345", 10, "...");
* // ���: "abcde ����..."
*
* cutStringByByte("abcde �����ٶ� 12345", 9, "..."); 	// 2byte ���� �߰��� ©���� ���
* // ���: "abcde ��..."
*/
function cutStringByByte(sString, nMaxByte, sTail){
	var sSource = (typeof sString != "String") ? sString.toString() : sString;
	var nLimit = parseInt(nMaxByte, 10);
	var sAdd = sTail || "";
	
	for(var i = 0, nLen = sSource.length, nCurrentByte = 0; i < nLen; i++){
		nCurrentByte += (sSource.charCodeAt(i) > 128) ? 2 : 1;
		if (nCurrentByte > nLimit){
			return sSource.substring(0, i) + sAdd;
		}
	}
	
	return sSource;
}

/**
* sString  + sTail�� nMaxPixel ��ŭ�� ���̷� �ڸ� �� ��ȯ
* @name		cutStringByPixel
* @function
* @param 	{String} 		sString 		���� ���ڿ�
* @param 	{Number} 	nMaxPixel 	������ �ִ� pixel ũ��
* @param 	{String} 		[sTail] 		���� �� ���� ���� ���ڿ� (default : "")
* @returns 	{String} 					������ ���ڿ�
* @requires 	Jindo.$Element
* @see		cutString
* @see		cutStringByByte
* @example
* cutStringByPixel("abcde �����ٶ� 12345", 100)
* // ���: "abcde ������"
*
* cutStringByPixel("abcde �����ٶ� 12345", 100, "...")
* // ���: "abcde ����..."
*/
function cutStringByPixel(sString, nMaxPixel, sTail){
	var sSource = (typeof sString != "String") ? sString.toString() : sString;
	var nLimit = parseInt(nMaxPixel, 10);
	var sAdd = sTail || "";
	var aResultString = [];
	var sTmpChat = "";
	
	if(!this.welMeasure){
		this.welMeasure = jindo.$Element("<span>");
		this.welMeasure.css({"position":"absolute", "top" : "-1000px", "left":"-1000px"});
		this.welMeasure.prependTo(document.body);
	}else{
		this.welMeasure.empty();
	}
	
	sSource = sSource.replace(/\r?\n/gim, " "); 
	
	for(var i = 0, nLen = sSource.length; i < nLen; i++){
		sTmpChat = sSource.charAt(i);				
		
		if(sTmpChat === " "){
			aResultString.push(";");
		}else{
			aResultString.push(sTmpChat);
		}
		
		this.welMeasure.text(aResultString.join("") + sAdd);
		
		if(this.welMeasure.width() > nLimit){
			return sSource.substring(0,(aResultString.length-1)) + sAdd;
		}
		
	}
	
	return sSource;
}

/**
* oObject�� ������ �̸��� ��ȯ
* @name		getConstructorName
* @function
* @param 	{Object} 	oObject 	������ ���� ������ ��ü
* @returns 	{String} 			������ �̸� (���� ���: null )
* @example
* getConstructorName(true);
* // ���: null
*
* getConstructorName(true);
* // ���: "Boolean"
*
* getConstructorName(100);
* // ���: "Number"
*
* getConstructorName("aaa");
* // ���: "String"
*
* getConstructorName(["a","b", 1]);
* // ���: "Array"
*
* getConstructorName({a:"a", b:"b", c:1});
* // ���: "Object"
*
* getConstructorName(function(){});
* // ���: "Function"
*/
function getConstructorName(oObject){
	if(oObject && oObject.constructor){
		var sCode = oObject.constructor.toString();
		var aMatch = sCode.match(/function ([^\(]*)/);
		return (aMatch && aMatch[1]) || null;
	}
	return null;
}

/**
* oObject ��ü�� ������ ���ο� ��ü�� ��ȯ
* @name		cloneObject
* @function
* @param 	{Object} 	oObject 	������ ��� ��ü
* @returns 	{Object} 			������ ���ο� ��ü
* @requires 	getConstructorName
* @example
* // ���ͷ� ��ü�� ����
* var oSource = {
*	aa : 100,
*	bb : true,
* 	cc : [1, 2, 3],
*	dd : {dda : 1, ddb : "2"},
*	ee : function(){ alert(1); } 
* }
* var oClone = cloneObject(oSource);
* oClone.ee();		//alert(1)�� �����
*
* // Function�� �ν��Ͻ� ����
* var fSource = function(){
* 	this.aa = "a";
* 	this.bb = function(){ alert(1); }
* }
* fSource.prototype.cc = function(){ alert(2); }
* var insClone = cloneObject(new fSource());
* insClone.bb();  	// alert(1)�� �����
* insClone.cc();  	// alert(2)�� �����
*
* // ����: ������ ������ ������ �� �� ��ü�� ������ ���� �ƴϴ�.(oSource != oClone)
*/
function cloneObject(oObject){
	var sConstructor;
    var oDestinationTarget;
			
    if(oObject && typeof oObject == "object" && (sConstructor = getConstructorName(oObject))){
		oDestinationTarget = eval("new " + sConstructor + "()");
		for(var key in oObject){
			oDestinationTarget[key] = arguments.callee(oObject[key]);
		}
    }else{
		oDestinationTarget = oObject;
	}
	
    return oDestinationTarget;
}

/**
* aMaybeArray��  ���� �迭���� ���θ� ��ȯ
* @name		isArray
* @function
* @param 	{Object} 		oMaybeArray 		�迭 ���θ� üũ�� ��ü
* @returns 	{Boolean} 					�迭���� ���� (true: �迭, false: �迭 �ƴ�)
* @example
* isArray({a:1, b:2});		//�������ڰ� Object�� ���
* isArray(elSelectbox.options); 	// �������ڰ� Collection �� ���
* // ���: false
*
* isArray([1, 2, 3]);
* isArray(new Array(1, 2, 3));
* // ���: true
*/
function isArray(oMaybeArray){   
    return Object.prototype.toString.call(oMaybeArray) == '[object Array]';   
}

/**
* �������ڷ� ���� �� ��ü�� ���� ��Ұ� ���ų� �ι��� �������ڰ� ù��° �������ڸ� ��� �����ϰ� �ִ��� ���θ� ��ȯ
* @name isEqualObject
* @function
* @param {Object} oBase ���� ��ü
* @param {Object} oComparison �� ��ü
* @returns {Boolean} �� ��� (true: ����, false: ����)
* @example
* var oBase = {a:1, b:{ba:1, bb:2}};
* var oComparison = {a:1,  {ba:1, bb:2}};
* var oComparison2 = {a:1, {ba:1, bb:2}, c:2};
* var oComparison3 = {a:2, {ba:1, bb:2}};
*
* isEqualObject(undefined, oComparison)
* isEqualObject(oBase, undefined) 
* // ���: false
*
* isEqualObject(oBase, oComparison)
* isEqualObject(oBase, oComparison2)
* // ���: true
*
* isEqualObject(oBase, oComparison3)
* // ���: fasle
*/
function isEqualObject(oBase, oComparison){
	if(!oBase || !oComparison){
		return false;
	}
	for(var x in oBase){
		if(oBase[x] instanceof Object){
			if(!this.isEqualObject(oBase[x], oComparison[x])){
				return false;
			}
		}else{
			if(oBase[x] != oComparison[x]){
				return false;
			}
		}
	}
	return true;
}

/**
* sTemplate �� ���ø� ����(/temp/)�� �ִٸ� htObject�� ������� �� ������ Ű�� �ش��ϴ� ������ �����Ͽ� ��ȯ
* @name		makeTemplate
* @function
* @param 	{String} 		sTemplate 	���ø� ����(/temp/)�� ���Ե� ���ڿ�
* @param 	{Hash Table} 	htObject 		���ø� ���ڵ��� Ű�� ������ "Ű:��" ������ ������Ʈ
* @returns 	{String} 					����� ���ڿ�
* @example
* var sHTML = "<span id='{tmp_id}'>{tmp_name}</span>";
* var htData = {tmp_id : "span_1", tmp_name : "AjaxUI Lab", tmp_desc : "UI Development"};
* var htData2 = {tmp_id : "span_1"};
*
* makeTemplate(sHTML, htData);
* // ���: "<span id='span_1'>AjaxUI Lab</span>"
*
* makeTemplate(sHTML, htData2);
* // ���: "<span id='span_1'></span>"
*/
function makeTemplate(sTemplate, htObject){
	return sTemplate.replace(/{([^{}]*)}/g, 
		function (a, b){
			var r = htObject[b] || "";
			return r; 
		}
	);
}

/**
* ǥ�� Date Format(yyyy-mm-dd �Ǵ� yyyy-mm-dd hh:mm:ss)�� Javascript�� Date ��ü�� �����Ͽ� ��ȯ
* @name		changeJavascriptDate
* @function
* @param 	{String} 	sNormalDate 	"yyyy-mm-dd" �Ǵ� "yyyy-mm-dd hh:mm:ss" ������ ���ڿ�
* @returns 	{Date} 				Javascript�� Date ��ü
* @see		changeDateFormat
* @example
* var dDate = changeJavascriptDate("2009/11/04");	//�������� ������ ���� ���� ���
* // ���: null
*
* var dDate = changeJavascriptDate("2009-11-04");
* //���: (IE)Wed Nov 04 00:00:00 UTC+0900 2009 / (FF)Wed Nov 04 2009 00:00:00 GMT+0900
*
* var dDate = changeJavascriptDate("2009-11-04 12:30:00");
* // ���: (IE)Wed Nov 04 12:30:00 UTC+0900 2009  / (FF)Wed Nov 04 2009 12:30:00 GMT+0900 
*
* // ����: dDate.constructor == Date
*/
function changeJavascriptDate(sNormalDate){
	var dReturnDate = null;
	var aValue = sNormalDate.match(/^([0-9]{4,})-([01][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])/);
	
	if(aValue === null){
		aValue = sNormalDate.match(/^([0-9]{4,})-([01][0-9])-([0-3][0-9])/);
		if(aValue !== null){
			dReturnDate = new Date(aValue[1], Number(aValue[2])-1, aValue[3]);
		}
	}else{
		dReturnDate = new Date(aValue[1], Number(aValue[2])-1, aValue[3], aValue[4], aValue[5], aValue[6]);
	}
	
	return dReturnDate;
}

/**
* Javascript�� Date ��ü�� �־��� �ɼǿ� �°� Format�� �����Ͽ� ��ȯ
* @name		changeDateFormat
* @function
* @param 	{Date} 		dJavascriptDate 	Javascript�� Date ��ü
* @param 	{Hash Table} 	[htOption] 		���� ���� �� ����  �ɼ�
* @returns 	{String} 						Format�� ����� ��¥ ���ڿ�
* @see		changeJavascriptDate
* @example
* // htOption �� ����
* htOption.format 			- ��ȯ �� Format�� ���ڿ��� �����Ѵ�.
* 	�⺻��	- "{yyyy}/{mm}/{0d} {0H}:{0i}"
*	{yyyy}  	- �⵵�� 4�ڸ��� ��Ÿ��.
* 	{yy}		- �⵵�� �ڿ� 2�ڸ��� ��Ÿ��.
* 	{mm}	- monthFormat�� ��������� ��Ÿ��.
* 	{dd}		- ���� 2�ڸ��� ��쿡 2�ڸ�,1�ڸ��� ��� 1�ڸ��� ��Ÿ��.
* 	{0d}		- ���� 1�ڸ��� ��� 0�� �ٿ� ������ 2�ڸ��� ��Ÿ��.
* 	{ww}	- weekFormat�� ��������� ��Ÿ��.
* 	{ap}		- ampmFormat�� ��������� ��Ÿ��.
* 	{hh}		- 1~12�÷� 2�ڸ��� ��쿡 2�ڸ�,1�ڸ��� ��� 1�ڸ��� ��Ÿ��.
* 	{0h} 		- 1~12�÷� 1�ڸ��� ��� 0�� ������ 2�ڸ��� ��Ÿ��.
* 	{HH} 	- 0~24�÷� 2�ڸ��� ��쿡 2�ڸ�,1�ڸ��� ��� 1�ڸ��� ��Ÿ��.
* 	{0H}		- 0~24�÷� 1�ڸ��� ��� 0�� ������ 2�ڸ��� ��Ÿ��.
* 	{ii}		- 0~59������ 2�ڸ��� ��쿡 2�ڸ�,1�ڸ��� ��� 1�ڸ��� ��Ÿ��.
* 	{0i}		- 0~59������ 1�ڸ��� ��� 0�� ������ 2�ڸ��� ��Ÿ��.
* 	{ss}		- 0~59������ 2�ڸ��� ��쿡 2�ڸ�,1�ڸ��� ��� 1�ڸ��� ��Ÿ��.
* 	{0s}		- 0~59������ 1�ڸ��� ��� 0�� ������ 2�ڸ��� ��Ÿ��
* htOption.monthFormat 	-  ���� ��Ÿ�� �� ���� Format�� �迭�� �����Ѵ�.
* 	�⺻��	- ["01","02","03","04","05","06","07","08","09","10","11","12"]
* htOption.weekFormat - �ָ� ��Ÿ�� �� ���� Format�� �迭�� �����Ѵ�.
* 	�⺻�� 	- ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
* htOption.ampmFormat 	- AM/PM�� ��Ÿ�� �� ���� Format�� �迭�� �����Ѵ�.
*	�⺻�� 	- ["am","pm"] 
* @example
* changeDateFormat(new Date());
* // ���: "2009/11/04 13:00"
*
* changeDateFormat(new Date(), {
*	format : "{yyyy}�� {mm}�� {dd}�� {ww}���� {ap} {hh}�� {ii}�� {ss}��", 
*	monthFormat : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
*	weekFormat : ["��", "ȭ", "��", "��", "��", "��", "��"],
*	ampmFormat : ["����", "����"]
* });
* // ���: "2009�� 11�� 4�� ������ ���� 1�� 3�� 5��"
*/
function changeDateFormat(dJavascriptDate, htOption){
	if(arguments.length < 1) {
		return false;
	}
	if (!(dJavascriptDate.constructor == Date || dJavascriptDate.constructor == Date())){
		return false;
	}
	
	var options = {
		format		: "{yyyy}/{mm}/{0d} {0H}:{0i}",
		monthFormat : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
		weekFormat	: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		ampmFormat	: ["am", "pm"]
	};
	htOption = htOption || {};
	for(var i in htOption){
		options[i] = htOption[i];
	}

	options["rowData"] = [dJavascriptDate.getFullYear()+"",
						dJavascriptDate.getMonth(),
						dJavascriptDate.getDate(),
						dJavascriptDate.getDay(),
						dJavascriptDate.getHours() < 12 ? 0 : 1,
						dJavascriptDate.getHours(),
						dJavascriptDate.getMinutes(),
						dJavascriptDate.getSeconds()];
	// Sunday ó��
	if(options["rowData"][3] === 0){
		options["rowData"][3] = 7;
	}
	
	return options.format.replace(/\{([^{}]*)\}/g, function(type){
		var coptions = options;

		function addZero(num){
			return (num >= 10) ? num : "0" + num;
		}
		function twelveNotation(num){
			return (num > 12) ? num - 12 : num;
		}
		var rowData = coptions.rowData;
		var monthFormat = coptions.monthFormat;
		var weekFormat = coptions.weekFormat;
		var ampmFormat = coptions.ampmFormat;

		return type == "{yyyy}" && rowData[0] ||
				type == "{yy}" && rowData[0].slice(2,4) ||
				type == "{mm}" && monthFormat[rowData[1]] ||
				type == "{dd}" && rowData[2] ||
				type == "{0d}" && addZero(rowData[2]) ||
				type == "{ww}" && weekFormat[rowData[3]-1] ||
				type == "{ap}" && ampmFormat[rowData[4]] ||
				type == "{hh}" && twelveNotation(rowData[5]) ||
				type == "{HH}" && rowData[5] ||
				type == "{0h}" && addZero(twelveNotation(rowData[5])) ||
				type == "{0H}" && addZero(rowData[5]) ||
				type == "{ii}" && addZero(rowData[6]) ||
				type == "{0i}" && addZero(rowData[6]) ||
				type == "{ss}" && rowData[7] ||
				type == "{0s}" && addZero(rowData[7]) || "'" + type + ":undefined type'";

	});
}

/**
* sNumberString�� ������ ������ �������� ���θ� ��ȯ
* @name		isNumberOnly
* @function
* @param 	{String} 	sNumberString 	�˻��Ϸ��� ���ڿ�
* @returns 	{Boolean} 				��� (true: ��� ����, false: �ϳ��̻��� ���ڰ� �ƴ�) 
* @see 		changeNumberFormat
* @example
* isNumberOnly(12345);
* isNumberOnly("12345");
* // ���: true
*
* isNumberOnly("123.45");
* isNumberOnly("-12345");
* // ���: false
*/
function isNumberOnly(sNumberString){
	if (/^[\d]+$/.test(sNumberString)){
		return true;
	}

	return false;
}

/**
* �������ڷ� ���� ���ڿ�(String)�� undefined �Ǵ� null �Ǵ� �� ���ڿ����� ���θ� ��ȯ
* @name 		isEmpty
* @function
* @param 	{String} 	sString 	�˻��Ϸ��� ���ڿ�
* @returns 	{Boolean} 		��� (true: undefined or null or �� ����, false: �� ���ڰ� �ƴ�) 
* @example
* isEmpty(undefined)
* isEmpty(null);
* isEmpty(""); 		//�� ����
* // ���: true
*
* isEmpty("  "); 	//���� ����(space bar)
* isEmpty("aaa");
* // ���: false
*/
function isEmpty(sString){
	if(sString && sString.length > 0){
		return false;
	}
	
	return true;
}

/**
* sString�� ��/�� ������ �����Ͽ� ��ȯ
* @name		trim
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			��/�� ������ ���ŵ� ���ڿ�
* @example
* trim();
* trim(undefined);
* // ���: undefined
*
* trim(null);
* // ���: null
*
* trim(111); 	//���������� type�� String�� �ƴ� ���
* // ���: ""
*
* trim(" abcde 12345 ")
* // ���: "abcde 12345"
*/
function trim(sString){
	if(!sString){
		return sString;
	}
	
	return (typeof sString == "string") ? sString.replace(/^\s+/g, "").replace(/\s+$/g, "") : "";
}

/**
* sEmail�� ��ü �̸��� �ּҷ� ��ȿ�� ������ ���θ� ��ȯ
* @name		isEmail
* @function
* @param 	{String} 		sEmail 	�˻��Ϸ��� ��ü �̸��� �ּ� ���ڿ�
* @returns 	{Boolean} 			��� (true: ��ȿ�� ��, false: �߸��� ��)
* @requires 	trim
* @see		isEmailFirst
* @see		isEmailLast
* @example
* isEmail(123);
* isEmail("@test.com");
* // ���: false
*
* isEmail("test@test.com");
* isEmail("test.test@test.co.kr");
* isEmail("-!#$%&'*+\/^_~{}@-!#$%&'*+\/^_~{}.com");
* // ���: true
*/
function isEmail(sEmail){
	var sEmailTrim = (typeof sEmail == "string") ? trim(sEmail) : "";
	var aResult = sEmailTrim.match(/[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)+/);
	
	if(aResult && aResult[0] == sEmailTrim){
		return true;
	}else{
		return false;
	}
}

/**
* sEmailFirst�� �̸��� �� @ �պκ��� ������ ��ȿ���� ���θ� ��ȯ
* @name		isEmailFirst
* @function
* @param 	{String} 		sEmailFirst 	�˻��Ϸ��� �̸��� �ּ� �� @ �պκ��� ���ڿ�
* @returns 	{Boolean} 				��� (true: ��ȿ�� ��, false: �߸��� ��)
* @see		isEmailLast
* @see		isEmail
* @example
* isEmailFirst(undefined);
* isEmailFirst(null);
* isemailFirst("test#test");  // Ư�����ڴ� hyphen(-), underbar(_), dot(.)�� �����ϴ�.
* //���: false
*
* isEmailFirst("Test.1-2_3");
* // ���: true
*/
function isEmailFirst(sEmailFirst){
	var rxEmailFirst = /^[\w\d]+([-_\.]?[\w\d])*$/i;
	if(sEmailFirst && rxEmailFirst.test(sEmailFirst)){
		return true;
	}
	return false;
}

/**
* sEmailLast�� �̸��� �� @ �ںκ��� ������ ��ȿ���� ���θ� ��ȯ
* @name		isEmailLast
* @function
* @param 	{String} 		sEmailLast 	�˻��Ϸ��� �̸��� �ּ� �� @ �޺κ��� ���ڿ�
* @returns 	{Boolean} 				��� (true: ��ȿ�� ��, false: �߸��� ��)
* @see		isEmailFirst
* @see		isEmail
* @example
* isEmailLast(undefined);
* isEmailLast(null);
* isEmailLast("test#test");  // Ư�����ڴ� hyphen(-), underbar(_), dot(.)�� �����ϴ�.
* isEmailLast("test.cokr");  // ������ dot(.) ���� ������ �ڸ����� 2~3�ڸ��� �����ϴ�. 
* //���: false
*
* isEmailLast("Test.1-2_3.co.kr");
* // ���: true
*/
function isEmailLast(sEmailLast){
	var rxEmailLast = /^[\w\d]([-_\.]?[\w\d])*\.[\w]{2,3}$/i;
	if(sEmailLast && rxEmailLast.test(sEmailLast)){
		return true;
	}
	return false;
}

/**
* sPhone(02-1234-5678)�� ��ȭ��ȣ(�ڵ��� ����) ������ ��ȿ���� ���θ� ��ȯ
* @name		isPhone
* @function
* @param 	{String} 		sPhone 	�˻��Ϸ��� ��ȭ��ȣ ���ڿ� (�����ڴ� "-"�� ���)
* @returns 	{Boolean} 			��� (true: ��ȿ�� ��, false: �߸��� ��)
* @example
* isPhone(undefined);
* isPhone(null);
* // ���: false
*
* isPhone("010-1234-5678");	// ������ȣ�� 0���� �����ϸ� 2~3�ڸ���, ������ 0�� �ƴ� ���� �����ϸ� 3~4�ڸ���, ������ ��ȣ�� 4�ڸ��� ���ڿ��� �Ѵ�.
* // ���: true
*/
function isPhone(sPhone){
	var rxPhone = /^0\d{1,2}-[1-9]\d{2,3}-\d{4}$/;
	if(sPhone && rxPhone.test(sPhone)){
		return true;
	}
	return false;
}

/**
* sIP�� IP �ּҷ� ��ȿ�� ������ ���θ� ��ȯ
* @name		isIP
* @function
* @param 	{String} 		sIP 	�˻��Ϸ��� IP �ּ� ���ڿ�
* @returns 	{Boolean} 		��� (true: ��ȿ�� ��, false: �߸��� ��)
* @example
* isIP(undefined);
* isIP(null);
* // ���: false
*
* isIP("255.255.255.255");
* // ���: true
*/
function isIP(sIP){
	var rxIP = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4]\d|[01]?\d\d|\d)\.(25[0-5]|2[0-4]\d|[01]?\d\d|\d)\.(25[0-5]|2[0-4]\d|[01]?\d\d|\d)$/;
	if(sIP && rxIP.test(sIP)){
		return true;
	}
	return false;
}

/**
* sURL�� URL�� ��ȿ�� ������ ���θ� ��ȯ
* @name		isURL
* @function
* @param 	{String} 		sURL 	�˻��Ϸ��� URL ���ڿ�
* @returns 	{Boolean} 			��� (true: ��ȿ�� ��, false: �߸��� ��)
* @example
* isURL("http://www.naver.com/?q=test#top")
* // ���: true (���� ��������: http, https, ftp, mailto, mms)
*
* isURL("www.naver.com/?q=test#top")
* // ���: false
*
* isURL("http://naver")
* // ���: false
*/
function isURL(sURL){
	var rxURL = /^(http|https|ftp|mailto|mms):(?:\/\/)?((\w|-)+(?:[\.:@](\w|-))+)(?:\/|@)?([^"\?]*?)(?:\?([^\?"]*?))?$/;
	if(sURL && rxURL.test(sURL)){
		return true;
	}
	return false;
}

/**
* sString ���ڿ� �� sBefore�� ��ġ�ϴ� ��� ����(��)�� sAfter ����(��)�� �����Ͽ� ��ȯ (��/�ҹ��� ����)
* @name		replaceAll
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @param 	{String} 	sBefore 	�����ϰ� ���� ���� ����(��)
* @param 	{String} 	sAfter 	���� �� ����� ��ü ����(��)
* @returns 	{String} 			���� �Ϸ�� ���ڿ�
* @example
* replaceAll("This is replaceAll function", "i", "#");
* // ���: "Th#s #s replaceAll funct#on"
*
* replaceAll("This is replaceAll function", "is", "#");
* // ���: "Th# # replaceAll function"
*/
function replaceAll(sString, sBefore, sAfter){
	return (typeof sString == "string") ? sString.replace(new RegExp(sBefore, "g"), sAfter) : "";
} 

/**
* sString ���ڿ� �� �� ��(\n)�� �����Ͽ� ��ȯ
* @name		removeNewline
* @function
* @param 	{String} 	sString 	���� ���ڿ�
* @returns 	{String} 			�� ���� ���ŵ� ���ڿ�
* @see		replaceNewline
* @example
* removeNewline(undefined);
* removeNewline(null);
* removeNewline(123);
* // ���: ""
*
* removeNewline("Line1\\nLine2");
* //���: "Line1Line2"
*/
function removeNewline(sString){
	return (typeof sString == "string") ? sString.replace(/\r/gi, "").replace(/\n/gi, "") : "";
}

/**
* sHTMLString �� br, p �±׸� �� ��(\n)�� �����Ͽ� ��ȯ
* @name		replaceNewline
* @function
* @param 	{String} 	sHTMLString 	���� ���ڿ�
* @returns 	{String} 				����� ���ڿ�
* @see		removeNewline
* @example
* replaceNewline(undefined);
* replaceNewline(null);
* replaceNewline(123);
* // ���: ""
*
* replaceNewline("Line1&lt;p>Line2&lt;br>&lt;br/>Line3&lt;/p>Line4");
* // ���: "Line1\\nLine2\\n\\nLine3\\nLine4"
*/
function replaceNewline(sHTMLString){
	return (typeof sHTMLString == "string") ? sHTMLString.replace(/<br\s?\/?>/gi, "\n").replace(/<\/?p>/gi, "\n") : "";
}

/**
* sChar ���ڸ� escapeó�� �� byte ũ�⸦ ��ȯ
* @name		getCharByte
* @function
* @param 	{String} 		sChar 	�˻��Ϸ��� ����
* @returns 	{Number} 			byte ũ��
* @see		getStringByte
* @example
* getCharByte(undefined)
* getCharByte(null)
* // ���: 0
*
* getCharByte("1")
* getCharByte("a")
* getCharByte(" ")
* // ���: 1
*
* getCharByte("��")
* // ���: 2
*/
function getCharByte(sChar){
	if(!sChar){
		return 0;
	}
		
	var nByteSize = 0;
	var str = escape(sChar);
	
	if(str.length == 1){
		nByteSize++;
	}else if(str.indexOf("%u") != -1){
		nByteSize += 2;
	}else if(str.indexOf("%") != -1){
		nByteSize += str.length/3;
	}
	
	return nByteSize;
}

/**
* sString ���ڿ��� �� ���ڸ� escape ó�� �� byte ũ�⸦ ����Ͽ� ������ ��ȯ
* @name		getStringByte
* @function
* @param 	{String} 		sString 	�˻��Ϸ��� ���ڿ�
* @returns 	{Number} 			�� byte ũ��
* @requires  	getCharByte
* @see		getCharByte
* @example
* getStringByte(undefined);
* getStringByte(null);
* getStringByte(123);
* // ���: 0
*
* getStringByte("test �׽�Ʈ");
* // ���: 11
*/
function getStringByte(sString){
	var sSource = (typeof sString == "string") ? sString : "";
	var sByte = 0;
	var sChar = "";
	var sLen  = sSource.length;
	
	for (i=0; i<sLen; i++){
		sChar = sSource.charAt(i);
		sByte += getCharByte(sChar);
	}
	
	return sByte;
}

/**
* Ȯ���ڸ� ������ ��ü ���ϸ�(sFileName)�� nMaxByte ���� ũ�� ���� ���ϸ� �� ũ�� ��ŭ �ڸ� �� sTail�� �ٿ� ��ȯ(Ȯ���ڴ� �׻� ����)
* @name 		cutFilenameByByte
* @function
* @param 	{String} 		sFileName 	���� ���ϸ�(Ȯ���� ����)
* @param 	{Number} 	nMaxByte 	������ �ִ� Byte ũ��
* @param 	{String} 		[sTail] 		���� ���ϸ��� ���� �� ���� ���� ���ڿ� (default: "") 
* @returns 	{String} 					������ ���ڿ�
* @requires 	getStringByte
* @see		cutStringByByte
* @see		getFileSize
* @example
* cutFilenameByByte("longFileName.txt", 0, "...") ;  //maxByte�� 0�� ���
* // ���: "longFileName.txt"
*
* // ���ϸ� �� byte ũ�� - (nMaxByte - Ȯ���ڸ� �� byte ũ��) = ����� ���ϸ� �� byte ũ��
* cutFilenameByByte("longFileName.txt", 10, "...") ; 
* // ���: "longFil...txt"
*
* cutFilenameByByte("longFileName.txt", 2, "...") ;  //maxByte�� Ȯ���ڸ� �� Byte ũ�� ���� ���� ���
* // ���: "...txt"
*
* cutFilenameByByte("longFileName", 10, "...") ;  //Ȯ���ڰ� ���� ���
* // ���: "longFileNa..."
*/
function cutFilenameByByte(sFileName, nMaxByte, sTail){
	var sSourceFileName = sFileName || "";
	var sAddTail = sTail || "";
	var nCutSize = parseInt(nMaxByte, 10);
	if(nCutSize < 1 || nCutSize >= getStringByte(sSourceFileName)){
		return sSourceFileName;
	}
	
	var aToken = sSourceFileName.split(".");
	var nTokenLength = aToken.length;
	var sFileExt = "";
	var nFileExtSize = 0;
	if(nTokenLength > 1){
		sFileExt = aToken[nTokenLength - 1];
		nFileExtSize = getStringByte(sFileExt);
		aToken.pop();
		sSourceFileName = aToken.join(".");
	}
	var nTailSize = 0;
	if(sAddTail != ""){
		nTailSize = getStringByte(sAddTail);
	}
	
	var nSize = nTailSize + nFileExtSize;
	if(nCutSize > nSize){
		nCutSize -= nSize;
	}else{
		sSourceFileName = "";
	}
	
	for(var i=0, nResultSize=0, nFileNameLength=sSourceFileName.length; i < nFileNameLength; i++){
		nResultSize += getCharByte(sSourceFileName.charAt(i));
		if(nResultSize > nCutSize){
			sSourceFileName = sSourceFileName.substring(0,i);
			break;
		}
	}
	return sSourceFileName + sAddTail + sFileExt;
}

/**
* nMaxLength ���� ��ŭ sElements ���ڿ��� ��ҵ�� ������ ���ڿ��� ����� ��ȯ
* @name		makeRandomString
* @function
* @param 	{Number} 	[nMaxLength] 	��ȯ�� ���ڿ��� ���� (default: 10)
* @param 	{String} 		[sElements] 	��ҷ� ����� ���ڿ� (default: ����+���� ��/�ҹ���)
* @returns 	{String} 					������ ���ڿ�
* @example
* makeRandom();
* // ���: ""
*
* makeRandom(10);
* // ���: SZUHa5V1vp	--> 	default (0~9, ���� ��/�ҹ���)�� ��ҷ� 10�ڸ��� ���� ���ڿ��� ��ȯ
*
* makeRandom(5, "0123456789");
* // ���: 10286 	--> 	0~9 ���ڸ� ��ҷ� 5�ڸ��� ���� ���ڿ��� ��ȯ
*/
function makeRandomString(nMaxLength, sElements){
	var string_length = nMaxLength || 0;
	var chars = sElements || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var randomstring = "";
	for(var i=0; i<string_length; i++){
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

/**
* byte������ ���� ũ�� ���� �˸��� ���� ������ ȯ���Ͽ� ��ȯ (�ּҴ���: 1KB)
* @name		getFileSize
* @function
* @param 	{Number} 	nByte 	byte������ ��
* @returns 	{String} 				ȯ��� ��(���� ���� ����)
* @see		cutFilenameByByte
* @example
* getFileSize(0);
* // ���: 0KB 		--> �������ڰ� 0, null, undefined �̸� "0KB"�� ��ȯ
*
* getFileSize(1);
* // ���: 1KB		--> �������ڰ� 1024(byte) ���ϴ� ��� "1KB"�� ��ȯ
* 
* getFileSize(1025);	
* // ���: 2KB		--> ��ȯ ���� ������ KB �̸� �Ҽ��� ù°�ڸ��� �ø�ó���Ѵ�.
*
* getFileSize(10000000000);
* // ���: 9.32GB 	--> ��ȯ ���� ������ MB �̻��̸� �Ҽ��� ��° �ڸ��� �ø�ó���Ѵ�.
*/
function getFileSize(nByte){
	var nByteSize = nByte || 0;
	var sRet= "", sUnit = "", nSize = 0;
	var aUnit = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
	var i = aUnit.length;
	
	if(nByteSize === 0){
		return nByteSize + aUnit[0];
	}
	
	while(i >= 0){         
		nSize = nByteSize / Math.pow(1024, i);
		if(Math.floor(nSize) > 0){
			if(i === 0){
				nSize = 1;
				sUnit = aUnit[i];
			}else{
				sUnit = aUnit[i-1];                                      
			}
			break;
		}
		i--;
	}

	if(sUnit == "KB"){
		sRet = Math.ceil(nSize) + sUnit;
	}else{
		var aMatch = String(nSize).match(/((\d*)\.(\d{0,2}))(\d)?/i);

		if(!aMatch[4] || Number(aMatch[4]) === 0){
			if(Number(aMatch[3]) === 0){
				sRet = String(aMatch[2]) + sUnit;
			}else{
				sRet = String(aMatch[1]) + sUnit;
			}
		}else{
			var nCeilSize = Math.round((Number(aMatch[1]) * 100) + 1) / 100;
			sRet = String(nCeilSize) + sUnit;
		}
	}

	return sRet;
}

/**
* ������ ���ڿ�(vNumber)�� 3�ڸ� ���� �޸�(,)�� ��� ��ȯ
* @name		changeNumberFormat
* @function
* @param 	{String || Number} 	vNumber 	���� or ������ ����
* @returns 	{String} 						�޸��� ����� ���ڿ�
* @see		isNumberOnly
* @example
* changeNumberFormat(undefined); 
* // ���: 0			-->  �������ڰ� null�� ��쵵 ����
*
* changeNumberFormat(1000000);
* // ���: 1,000,000 
*
* changeNumberFormat("1000.0000");
* // ���: 1,000.0000	--> �Ҽ��� ���� ���ڴ� ������� ����
*
* changeNumberFormat("$1000.00");
* // ���: $1,000.00 	--> ������ �ϳ� �������� ����
*
* changeNumberFormat("abcde");
* // ���: abcde 		--> ������ ���ڰ� �ƴϸ� �״�� ��ȯ
*/
function changeNumberFormat(vNumber){
	var sUnderNumber = "";
	var sNumberString = vNumber || 0;
	sNumberString = (typeof sNumberString != "String") ? String(sNumberString) : sNumberString;
		
	if(sNumberString.indexOf(".") > -1){
		var aNumber = sNumberString.split(".");
		sNumberString = aNumber[0];
		sUnderNumber = "." + aNumber[1];
	}
	
	return sNumberString.replace(/(\d)(?=(\d{3})+$)/igm, "$1,") + sUnderNumber;
}

/**
* �������ڷ� ���� ��� ���ڿ�(sPath)���� ������ �������� ��ȯ (��ο� ���ϸ��� ���� ��� ���ϸ��� ��ȯ�ϹǷ� ��ο��� ���ϸ��� �����Ѵ�.)
* @name		getFolderName
* @function
* @param 	{String} 	sPath 	���ϸ��� ������ ��� ���ڿ� 
* @returns 	{String} 			����� ������
* @see		isUpperPath
* @see		getParentPath
* @example
* //�Ǵ� ���: ������ "/" ���� ���ڿ��� �����´�.(���ڿ��� ���� ��� ���� "/" ���� ���ڿ��� �����´�.)
* getFolderName("http://www.naver.com/naver/test");
* // ���: "test"
*
* getFolderName("http://www.naver.com/naver/test/");
* // ���: "test"
*
* getFolderName("http://www.naver.com/naver/test/index.html");
* // ���: "index.html"  (���ϸ��� ������ ��)
*/
function getFolderName(sPath){
	return (typeof sPath == "string") ? sPath.match(/.*\/(.[^\/]*)\/?$/i)[1] : "";
}

/**
* sUpperPath�� sPath�� ���� ���� ������� ���θ� ��ȯ (��ο� ���ϸ��� ���� ��� �߸��� ����� ������ �� �����Ƿ� ��ο��� ���ϸ��� �����Ѵ�.)
* @name		isUpperPath
* @function
* @param 	{String} 		sUpperPath 		���� ���� ��� ���ڿ�
* @param 	{String} 		sMaybeLowerPath 	���� �������� �˻��Ϸ��� ��� ���ڿ�
* @returns 	{Boolean} 					���� ���� ���� (true: ������, false: ������ �ƴ�)
* @requires 	Jindo.$S
* @see		getFolderName
* @see		getParentPath
* @example
* // �Ǵ� ���: �ι�° �������ڰ� ù��° �������ڸ� �����ϴ��� ���θ� �Ǵ�(ù ���ں��� ��ġ�ؾ� ��.)
* isUpperPath("http://www.naver.com/naver/", "http://www.naver.com/naver/test/");
* // ���: true
*
* // �� �������ڰ� ������ �� or ��ġ�� ��� 
* isUpperPath("http://www.naver.com/naver/", "http://www.naver.com/naver/");
* isUpperPath("http://www.naver.com/naver/", "http://www.naver.com/naver/index.html");
* // ���: true
*
* // �� �������ڰ� ������ ��ġ�̱��ϳ�, "�Ǵ� ���"�� ��߳��� ���
* isUpperPath("http://www.naver.com/naver/", "http://www.naver.com/naver");
* // ���: false
*/
function isUpperPath(sUpperPath, sMaybeLowerPath){
	var bIsUpper = false;
	var sRegexUpperPath = jindo.$S(sUpperPath).escapeRegex().$value();
	
	var sReg = new RegExp("^" + sRegexUpperPath,"i");
	var aMatch = sReg.exec(sMaybeLowerPath);
	
	if(aMatch){
		bIsUpper = true;
	}
	
	return bIsUpper;
}

/**
* �ڽ�(sPath)�� �θ� ���� ��θ� ��ȯ
* @name		getParentPath
* @function
* @param 	{String} 	sPath 	�ڽ��� ��� ���ڿ�(������/�����, ��� �������� ��� ����)
* @returns 	{String} 			�θ� ������ ��� ���ڿ�
* @see		getFolderName
* @see		isUpperPath
* @example
* // �Ǵ� ���: ������ "/" ���� ���ڿ��� ������ ��δ� �����´�.(���ڿ��� ���� ��� ���� "/" ���� ���ڿ��� �����Ѵ�.)
* getParentPath("/");  //Root ����� ���
* getParentPath("http://www.naver.com/");  //Root ����� ���
* //���: ""
*
* getParentPath("http://www.naver.com/naver");
* // ���: "http://www.naver.com/"
*
* getParentPath("http://www.naver.com/naver/test/");
* // ���: "http://www.naver.com/naver/"
*
* getParentPath("http://www.naver.com/naver/test/index.html");
* // ���: "http://www.naver.com/naver/test/" (����: �߸��� ����� �����Ƿ� ���ϸ��� ������ ��)
*/
function getParentPath(sPath){
	var sParentPath = sPath.replace(/([^\/]*\/?)$/i, "");
	if(/^(\w*:\/{2,3})$/.test(sParentPath)){
		sParentPath = "";
	}
	
	return sParentPath;
}

/**
* �迭�� ���ϴ� ���/��������  ���� 
* @name		sortArray
* @function
* @param 	{Array} 	aTargetArray 	���� �迭 
* @param 	{String} 	sSortType 	���� ��� (asc: ��������, desc: ��������)
* @param 	{String} 	[sFieldName] 	�迭 ��Ұ� Hash Table ������ ��, Ư�� �ʵ�(key)�� �����ϸ� �� ���� ��(value)�� ���Ͽ� ���� 
* @returns 	{Array} 				������ �� �迭
* @example
* // �Ϲ� �迭�� ���
* sortArray(["��", "1", "ab", "��", "a", "b", "3", "ac", "2", "��"], "asc");	// �������� ����
* // ���: ["1", "2", "3", "a", "ab", "ac", "b", "��", "��", "��"]
*
* // Hash Table�� ��ҷ��ϴ� �迭�� ���
* var aData = [
* 	{name: "c", value: "3"},
* 	{name: "b", value: "4"},
* 	{name: "a", value: "2"},
* 	{name: "d", value: "1"}
* ]
* sortArray(aData, "asc", "name"); 	// "name"�ʵ带 �������� �������� ����
* // ���: [
* // 	{name: "a", value: "2"},
* // 	{name: "b", value: "4"},
* // 	{name: "c", value: "3"},
* // 	{name: "d", value: "1"}
* // ]
*/
function sortArray(aTargetArray, sSortType, sFieldName){
	var aSortedArray;
	var nTargetArrayLength = aTargetArray.length;
	var vCompareA, vCompareB;
	
	if(nTargetArrayLength / 2 < 1){
		// �迭�� ���̰� 1�� ���  �״�� return
		aSortedArray = aTargetArray;
	}else if(nTargetArrayLength / 2 == 1){
		// �迭�� ���̰� 2�� ��� ����
		var nTemp;
		vCompareA = (sFieldName) ? aTargetArray[0][sFieldName] : aTargetArray[0] ;
		vCompareB = (sFieldName) ? aTargetArray[1][sFieldName] : aTargetArray[1];
		
		if(sSortType == "asc"){
			// �������� ����
			if(vCompareA > vCompareB){
				nTemp = aTargetArray[1];
				aTargetArray[1] = aTargetArray[0];
				aTargetArray[0] = nTemp;
			}
		}else{
			// �������� ����
			if(vCompareA < vCompareB){
				nTemp = aTargetArray[1];
				aTargetArray[1] = aTargetArray[0];
				aTargetArray[0] = nTemp;
			}
		}
		aSortedArray = [aTargetArray[0], aTargetArray[1]];
	}else{	
		// �迭�� ���̰� 3�̻��� ��� ����Ʈ�� �˰��� ����
		var nMiddleIndex = Math.round(nTargetArrayLength / 2) - 1;
		var nLeftIndex = 0;
		var nRightIndex = 0;
		
		var aLeftArray = [];
		var aRightArray = [];
		
		if(sSortType == "asc"){		// �������� ����
			//ū�� �������� ����
			for(var i = 0; i < nMiddleIndex; i++){
				vCompareA = (sFieldName) ? aTargetArray[i][sFieldName] : aTargetArray[i];
				vCompareB = (sFieldName) ? aTargetArray[nMiddleIndex][sFieldName] : aTargetArray[nMiddleIndex];
				if(vCompareA > vCompareB){	
					aRightArray[nRightIndex++] = aTargetArray[i];
				}else{
					aLeftArray[nLeftIndex++] = aTargetArray[i];
				}
			}
			//������ �������� ����
			for(var j = nMiddleIndex + 1; j < nTargetArrayLength; j++){
				vCompareA = (sFieldName) ? aTargetArray[j][sFieldName] : aTargetArray[j];
				vCompareB = (sFieldName) ? aTargetArray[nMiddleIndex][sFieldName] : aTargetArray[nMiddleIndex];
				if(vCompareA < vCompareB){
					aLeftArray[nLeftIndex++] = aTargetArray[j];
				}else{
					aRightArray[nRightIndex++] = aTargetArray[j];
				}
			}
		}else{						// �������� ����
			// ������ ��������
			for(var i = 0; i < nMiddleIndex; i++){
				vCompareA = (sFieldName) ? aTargetArray[i][sFieldName] : aTargetArray[i];
				vCompareB = (sFieldName) ? aTargetArray[nMiddleIndex][sFieldName] : aTargetArray[nMiddleIndex];
				if(vCompareA < vCompareB){
					aRightArray[nRightIndex++] = aTargetArray[i];
				}else{
					aLeftArray[nLeftIndex++] = aTargetArray[i];
				}
			}
			// ũ�ų������� ��������
			for(var j = nMiddleIndex + 1; j < nTargetArrayLength; j++){
				vCompareA = (sFieldName) ? aTargetArray[j][sFieldName] : aTargetArray[j];
				vCompareB = (sFieldName) ? aTargetArray[nMiddleIndex][sFieldName] : aTargetArray[nMiddleIndex];
				if(vCompareA > vCompareB){
					aLeftArray[nLeftIndex++] = aTargetArray[j];
				}else{
					aRightArray[nRightIndex++] = aTargetArray[j];
				}
			}
		}
		
		//�������
		var nLeftArrayLength = aLeftArray.length;
		var nRigthArrayLength = aRightArray.length;
		var aLeft, aRight;
		if(nLeftArrayLength > 1){
			aLeft =  arguments.callee(aLeftArray, sSortType, sFieldName);
		}else{
			aLeft = aLeftArray;
		}
		
		if(nRigthArrayLength > 1){
			aRight =  arguments.callee(aRightArray, sSortType, sFieldName);
		}else{
			aRight = aRightArray;
		}
		
		aSortedArray = new Array(nLeftArrayLength + nRigthArrayLength - 1);
		var nSortedIndex = 0;
		for(var i = 0, nLeftLen = aLeft.length; i < nLeftLen; i++){
			aSortedArray[nSortedIndex++] = aLeft[i];
		}
		aSortedArray[nSortedIndex++] = aTargetArray[nMiddleIndex];
		for(var i = 0, nRightLen = aRight.length; i < nRightLen; i++){
			aSortedArray[nSortedIndex++] = aRight[i];
		}
	}

	return aSortedArray;
}

/**
* ������ �� Cookie �� ������ Cookie�� ���� ��ȯ 
* @name		getCookie
* @function
* @param 	{String} 	sName 	�����ϰ��ϴ� Cookie�� Field Name
* @returns 	{String} 			�ش� ��Ű�� value ��
* @see		setCookie
* @example
* document.cookie = "testName=testValue";
*
* getCookie("testName");
* // ���: "testValue"
*
* getCookie("testName2");
* // ���: null
*/
function getCookie(sName){
	var ca = document.cookie.split(/\s*;\s*/);
	var re = new RegExp("^(\\s*"+sName+"\\s*=)");
	
	for(var i=0; i < ca.length; i++){
		if(re.test(ca[i])){
			return unescape(ca[i].substr(RegExp.$1.length));
		}
	}
	
	return null;
}

/**
* ������ �� Cookie�� ������ Cookie ������ �߰�
* @name		setCookie
* @function
* @param 	{String} 		sName		�߰��� Cookie�� Field Name
* @param 	{String} 		sValue 		�߰��� Cookie�� Value ��
* @param 	{Number} 	[nDays] 		�߰��� Cookie�� ��ȿ�Ⱓ(����: ��)
* @param 	{String} 		[sDomain] 	�߰��� Cookie�� ������
* @param 	{String} 		[sPath] 		�߰��� Cookie�� ���
* @see		getCookie
* @example
* document.cookie = "";
*
* setCookie("testName3", "testValue3");
* setCookie("testName4", "testValue4", 1, document.domain,  "/");
* alert(document.cookie);
* // ���: "testName3=testValue3;testName4=testValue4"
*/
function setCookie(sName, sValue, nDays, sDomain, sPath){
	var sExpire = "";
	
	if(typeof nDays == "number"){
		sExpire = ";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString();
	}
	if(typeof sDomain == "undefined"){
		sDomain = "";
	}
	if(typeof sPath == "undefined"){
		sPath = "/";
	}
	
	document.cookie = sName+"="+escape(sValue)+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
}

/**
* oDestination�� ���� oSource�� property���� oDestination���� Ȯ���Ͽ� ��ȯ
* @name		extend
* @function
* @param 	{Object} 	oDestination 	Ȯ���� Object
* @param 	{Object} 	oSource 		���� Object
* @returns 	{Object} 				Ȯ��� Object
* @example
* var oDestination = {aa : "1", bb : "2", cc : "3"};
* var oSource = {aa : "5", dd : "4"};
*
* extend(oDestination, oSource);
* // ���: {aa : "1", bb : "2", cc : "3", dd : "4"}
* // --> {aa : "1"}�� ���� ������ ������Ƽ�� ������ ��� ����� �ʰ� �����Ѵ�.
*/
function extend(oDestination, oSource){
	for(var name in oSource){
		if(typeof(oDestination[name]) == 'undefined'){
			oDestination[name] = oSource[name];
		}
	}
	return oDestination;
}

/**
* �������ڷ� ���� ��ü�� �Լ��� ���� �ϳ��� �Լ��� ��ȯ (Jindo.$Fn�� ������� �ʰ� �ܼ��� binding�� �ϱ� ���� �Լ�)
* @name		bind
* @function
* @param 	{Object} 		oObject 	�ι�° �������ڷ� ���� �Լ�(fFunc)�� this��ü�� Binding�ϱ� ���� object
* @param 	{Function} 	fFunc 	Binding�ϱ� ���� ��� �Լ�
* @returns 	{Function} 			Binding �� �Լ�
* @example
* var sReferName = "window object";
* var oObj = {sReferName : "oObj object", sDesc : "Description"};
* var fFunc = function(){ alert(this.sReferName); };
*
* fFunc();
* // ���: "window object" 	--> this�� window�� ����Ų��.
*
* (bind(oObj, fFunc))();
* // ���: "oObj object" 		--> ���ε��� �Լ�(Ȯ��� fFunc) ������ this ��ü�� oObj ��ü�� ����Ų��.
*/
function bind(oObject, fFunc){
	var oSelf = oObject;
	return function(){
		return fFunc.apply(oSelf, arguments);
	};
}

/**
* �������ڷ� ���� ������Ʈ(elElement)�� ������ ���� �ʵ��� ����
* @name		disableSelection
* @function
* @param 	{HTML Element} 	elElement 	���õ��� �ʵ��� �� ������Ʈ
* @requires 	Jindo.$Agent
* @example
* <div>DIV AREA<span id="span_1">SPAN AREA <span id="span_2">INNER_SPAN AREA</span></span></div>
*
* <script type="text/javascript">
*     disableSelection(document.getElementById("span_1"));
* </script>
* // ���: span_1�� ���õǾ����� �ʴ´�.
* // ����: �ַ�, �巡�׽� Ư�� ������Ʈ�� ���õ��� �ʵ��� �� �� ���
* // ����: IE,Opera�� ���� unselectable �Ӽ����� �����ϴ� ��� �巡�� �������� ����/���� ������Ʈ�� ���� ������� �ʴ´�.
*/
function disableSelection(elElement){
	var oNavigator = jindo.$Agent().navigator();
	if(oNavigator.ie || oNavigator.opera){  
		elElement.unselectable = 'on';  
	}else if(oNavigator.safari || oNavigator.chrome){  
		elElement.style.KhtmlUserSelect = 'none';  
	}else{  
		elElement.style.MozUserSelect = '-moz-none';
	}  
}

/**
* �������ڷ� ���� ���̾� ������Ʈ(elElement)�� �Ӽ���(oAttr)�� �߰� �����Ͽ� ��ȯ 
* @name		setLayerAttrs
* @function
* @param 	{HTML Element} 	elElement 	�Ӽ��� �߰��� ��� ������Ʈ
* @param 	{Hash Table}  		htAttr 		�߰��� �Ӽ�/��
* @returns 	{HTML Element} 				�Ӽ��� �߰��� ������Ʈ
* @example
* var oEl = document.createElement("div");
* setLayerAttrs(oEl, {id : "div_1", style : {width: "100px"}});
* // ���: <div id="div_1" style="width:100px;"></div>
*/
function setLayerAttrs(elElement, htAttr){
	for(var prop in htAttr){
		if(typeof htAttr[prop] != 'object'){
			elElement[prop] = htAttr[prop];
		}else{
			arguments.callee(elElement[prop], htAttr[prop]);
		}
	}
	return elElement;
}

/**
* ���� ���ڿ�(sSource)�� ������ ����(nLength)���� ���� ��� ������ ���� ��ŭ ���� ���ڿ��� �պκ��� ������ ����(sPadChar)�� ä���. 
* @name 		pad
* @function
* @param 	{String} 		sSource 		���� ���ڿ�
* @param 	{Number} 	nLength 		��� ���ڿ��� ����
* @param 	{String} 		[sPadChar] 	������ ���̸� ä�� ����(default: ���鹮��)
* @returns 	{String} 					������ ���ڿ�
* @example
* pad("1", 5);
* // ���: "    1"(���� 4��)
* pad("1", 5, "0");
* // ���: "00001"
*/
function pad(sSource, nLength, sPadChar){
	var sPad = sPadChar || " ";
	var sResult = sSource + "";

	if(sResult.length < nLength){
		var aStr = new Array((nLength - sResult.length) + 1);
		aStr[aStr.length - 1] = sResult;
		sResult = aStr.join(sPad);
	}
	
	return sResult;
}

/**
* �������ڷ� ���� ������ ���ڿ�(sSelector)�� �ش��ϴ� CSS Style ��ü�� ��ȯ
* @name		getCSSRule
* @function
* @param 	{String} 	sSelector 		������ ���ڿ�
* @returns 	{object} 				��Ÿ�� ��ü
* @example
* <style>
*     .sample {color : red;}
* </style>
*
* <span class="sample">one</span> 
* <span>two</span>
* <span class="sample">three</span>
* 
* <script type="text/javascript">
*     var oEmpty = getCSSRule("#empty");  
*     // #empty�� ����� CSS Style ��ü�� ���� ��� �� CSS Style(#emplty {})�� ����� Head �� ���� �� ��ȯ�Ѵ�.
*
*     var oSample = getCSSRule(".sample");  // .sample�� ����� CSS Style ��ü�� ��ȯ
*     oSample.color = "blue";	// CSS Style�� ������ ����
* </script>
*
* // ����: ������ selector�� �ش� �ϴ� ��Ÿ�� ��ü�� ������ ���������ν� selector�� �ش��ϴ� ��� ������Ʈ�� ��Ÿ���� �����Ѵ�. 
*/
function getCSSRule(sSelector){
	var fpTry = function(sSelector){
		var aSheets = document.styleSheets;
		
		for(var i = aSheets.length - 1; i >= 0; i--){
			try{
				var oSheet = aSheets[i];
				var aRules = oSheet.cssRules || oSheet.rules;
				for(var j = aRules.length - 1; j >= 0; j--){
					var oRule = aRules[j];
					
					if (oRule.selectorText.toLowerCase() == sSelector.toLowerCase()){
						return oRule.style || null;
					}
				}
			}catch(e){
			}
		}
		
		return null;
	};
	
	var oStyle = fpTry(sSelector);
	if(oStyle){
		return oStyle;
	}
	
	var oEl = document.createElement('style');
	oEl.type = "text/css";
	
	if(oEl.styleSheet){
		oEl.styleSheet.cssText = sSelector + '{}';
	}else{
		oEl.appendChild(document.createTextNode(sSelector + '{}'));
	}

	document.getElementsByTagName('head')[0].appendChild(oEl);
	
	return fpTry(sSelector);
}

/**
* �������ڷ� ���� �ڽ� ������Ʈ(elInner)�� �θ� ������Ʈ(elOuter)�� �߾ӿ� ��ġ��Ų��.
* @name		arrangeCenter
* @function
* @param 	{HTML Element} 	elInner 	�߾ӿ� ��ġ��Ű���� �ڽ� ������Ʈ
* @param 	{HTML Element} 	elOuter 	�θ� ������Ʈ
* @example
* // ����: elInner ������Ʈ�� position���� relative�� ����Ǿ� �־�� �Ѵ�.
* <div id="outer" style="width:500px; height:300px;">
* 	<div id="inner" style="position:relative; width:100px;">Arrange Center</div>
* </div>
*
* <script type="text/javascript">
*     var elOuter = document.getElementById("outer");
*     var elInner = document.getElementById("inner");
*
*     arrageCenter(elInner);
*     // ���: elInner�� �θ𿤸���Ʈ�� �߾ӿ� ��ġ��Ų��.
*
*     arrageCenter(elInner, elOuter);
*     // ���: elInner�� elOuter�� �߾ӿ� ��ġ��Ų��.
* </script>
*/
function arrangeCenter(elInner, elOuter){
	var elChild = elInner;
	var elParent = elOuter || elChild.parentNode;
	var aOuterSize = [elParent.offsetWidth, elParent.offsetHeight];
	var aInnerSize = [elChild.offsetWidth, elChild.offsetHeight];
	
	elChild.style.left = (aOuterSize[0] - aInnerSize[0]) / 2 + 'px';
	elChild.style.top = (aOuterSize[1] - aInnerSize[1]) / 2 + 'px';
}

/**
* �������ڷ� ���� �̹��� ������Ʈ(elImg)�� ���ϸ��� bFlag ���� ���� ����
* @name		setImageOn
* @function
* @param 	{HTML Element} 	elImg 	��� ��ų �̹���
* @param 	{Boolean} 		bFlag 	���ϸ� ���� "_on"�� ������ ���� (true: ����, false: ����)
* @see		isImageOn
* @example
* var elImg = new Image();
* elImg.src = "./sampleImage.jpg";
* setImageOn(elImg, true);
* // ���: <img id="imgSample" src="./sampleImage_on.jpg" />
*
* elImg.src = "./sampleImage_on.jpg";
* setImageOn(elImg, false);
* // ���: <img id="imgSample" src="./sampleImage.jpg" />
*/
function setImageOn(elImg, bFlag){
	var sSrc = elImg.src;

	sSrc = sSrc.replace(/(\w+)(\.\w+)(\?.*)?$/, function($0, sFileName, sExt, $3) {
		
		sFileName = sFileName.replace(/_on$/, '');
		if(bFlag){
			sFileName = sFileName + '_on';
		}

		return sFileName + sExt + ($3 || '');

	});

	elImg.src = sSrc;
}

/**
* �������ڷ� ���� �̹��� ������Ʈ(elImg)�� ���ϸ� ���� "_on"�� �ִ��� ���θ� ��ȯ
* @name		isImageOn
* @function
* @param 	{HTML Element} 	elImg 	�˻��Ϸ��� �̹��� ������Ʈ
* @returns 	{Boolean} 				���ϸ� ���� "_on"�� �ִ��� ���� (true: ����, false: ����) 
* @see		setImageOn
* @example
* var elImg = new Image();
* elImg.src = "./sampleImage.jpg";
* isImageOn(elImg);
* // ���: false
*
* elImg.src = "./sampleImage_on.jpg";
* isImageOn(elImg);
* // ���: true
*/
function isImageOn(elImg){
	var rxImg = /(\w+)_on(\.\w+)(\?.*)?$/;
	return rxImg.test(elImg.src);
}

/**
* IE������ URL�� Hash(#) ��� �� �̺�Ʈ �߻��� ���� ������ Ÿ��Ʋ�� ����Ǵ� �÷��� ���׸� ȸ��
* @name 		avoidFlashHashBug
* @function
* @example
* // ������ ������ �ѹ��� �����ϸ� �ǹǷ� �͸��Լ��� ���� (����)
* (function() {
*	var avoidFlashHashBug = function() {
*		var sTitle = document.title;
*		setTimeout(function() { 
*			document.title = sTitle;
*		}, 0);
*	};
*	
*	if (document.attachEvent) { // only IE
*		document.attachEvent('onmousedown', avoidFlashHashBug);
*		document.attachEvent('onkeydown', avoidFlashHashBug);
*	}
* })();
*/
function avoidFlashHashBug(){
	var sTitle = document.title;
	window.setTimeout(function() { 
		document.title = sTitle;
		}, 0);
} 

/**
* �˾� �����츦 ����.
* @name		openPopup
* @function
* @param 	{String} 		sUrl 			�˾� ������� ����� ������ URL
* @param 	{String} 		sTitle 		�˾� �������� Title
* @param 	{Number} 	nWidth 		�˾��� ���� ������
* @param 	{Number} 	nHeight 		�˾��� ���� ������
* @param 	{Boolean} 	[isCenter] 	�˾��� ȭ�� ���߾ӿ� ��� ������ ����(true: �߾�, false: �߾Ӿƴ�, default: false)
* @returns 	{Object} 					�˾� ������(window)
* @example
* openPopup("popup.html", "_blank", 300, 400, true);
* // ���: �Ź� ��â(_blank or _new)���� ȭ�� �߾ӿ� ����.
*
* openPopup("popup.html", "title", 300, 400, false);
* // ���: �ϳ��� â(title ����)���� ������ ĳ�õ� ��ġ�� ����.
*/
function openPopup(sUrl, sTitle, nWidth, nHeight, isCenter){
	var sPosition = "";
	var bCenter = isCenter || false;
	if(bCenter){
		nLeftPosition = (screen.availWidth - nWidth) / 2;
		nTopPosition = (screen.availHeight - nHeight) / 2;
		sPosition = "left=" + nLeftPosition + ", top=" + nTopPosition + ",";
	}
	
	return window.open(sUrl, sTitle, sPosition + " toolbar=no, location=no, status=no, menubars=no, resizable=no, width=" + nWidth + ", height=" + nHeight);
}

/**
* �������ڷ� ���� URL ���ڿ�(sURL)���� �������� �����Ͽ� ��ȯ(���� ���ڿ� ���������� ������� ������ ""�� ��ȯ)
* @name		getDomain
* @function
* @param 	{String} 	[sURL] 	URL ���ڿ� (default: ���� ������ URL)
* @returns 	{String} 			������ ���ڿ�
* @see		getSimpleURL
* @see		getURLParameter
* @see		getURLHash
* @example
* // ���� ���� ��������: http, https, mms
* getDomain()
* // ���: ���� �������� URL���� �����Ͽ� ��ȯ
*
* getDomain("http://www.naver.com/naver/index.html");
* // ���: "http://www.naver.com"
*
* getDomain("www.naver.com/naver/index.html"); 		--> �������� ������ �ȵ� ���
* // ���: ""
*/
function getDomain(sURL){
	var sSourceURL = sURL || window.location.toString();
	var aMatch = sSourceURL.match(/^(http|https|mms):\/\/([^\/]*)/i);
	
	return (!!aMatch) ? aMatch[0] : "";
}

/**
* �������ڷ� ���� URL ���ڿ�(sURL)���� �Ķ���͸� ������ URL ���ڿ��� ��ȯ
* @name 		getSimpleURL
* @function
* @param 	{String} 	[sURL] 	URL ���ڿ� (default: ���� ������ URL)
* @returns 	{String} 			�Ķ���͸� ������ URL ���ڿ�
* @see		getDomain
* @see		getURLParameter
* @see		getURLHash
* @example
* getSimpleURL()
* // ���: ���� �������� URL���� �����Ͽ� ��ȯ
*
* getSimpleURL("http://se.naver.com/index.nhn?query='naver'");
* // ���: http://se.naver.com/index.nhn 		--> �������� ��� ����.
*/
function getSimpleURL(sURL){
	var sSourceURL = sURL || window.location.toString(); 
	
	if(sSourceURL.indexOf("?") > -1){
		sSourceURL = sSourceURL.split("?")[0];
	}
	if(sSourceURL.indexOf("#") > -1){
		sSourceURL = sSourceURL.split("#")[0];		// Hash���� �ִ� ��� ���
	}
	
	return sSourceURL;
}

/**
* �������ڷ� ���� URL ���ڿ�(sURL)���� �Ķ���͸� �����Ͽ� ��ȯ
* @name		getURLParameter
* @function
* @param 	{String} 	[sURL] 	URL ���ڿ� (default: ���� ������ URL)
* @returns 	{String} 			�Ķ���� ���ڿ�
* @see		getDomain
* @see		getSimpleURL
* @see		getURLHash
* @see		changeQueryStringToObject
* @example
* getURLParameter()
* // ���: ���� �������� URL���� �����Ͽ� ��ȯ
*
* getURLParameter("http://se.naver.com/?query='nhn'&page='1'");
* getURLParameter("http://se.naver.com/?query='nhn'&page='1'#top");
* // ���: "query='nhn'&page='1'" 		--> �������� ��� ����.
*/
function getURLParameter(sURL){
	var sSourceURL = sURL || window.location.toString(); 
	var sURLParams = "";
	
	if(sSourceURL.indexOf("?") > -1){
		sURLParams = sSourceURL.split("?")[1];
		if(sURLParams.indexOf("#") > -1){
			sURLParams = sURLParams.split("#")[0];
		}
	}
	
	return sURLParams;
}

/**
* �������ڷ� ���� URL ���ڿ�(sURL)���� �ؽ���(# ����)�� �����Ͽ� ��ȯ
* @name 		getURLHash
* @function
* @param 	{String} 	[sURL] 	URL ���ڿ� (default: ���� ������ URL)
* @returns 	{String} 			�ؽ�(# ����) ���ڿ�
* @see		getDomain
* @see		getSimpleURL
* @see		getURLParameter
* @see		changeQueryStringToObject
* @example
* getURLHash()
* // ���: ���� �������� URL���� �����Ͽ� ��ȯ
*
* getURLHash("http://se.naver.com/#top");
* // ���: "top"
*
* getURLHash("http://se.naver.com/#cate='1'&page='1'");
* getURLHash("http://se.naver.com/?query='nhn'#cate='1'&page='1'");
* // ���: "cate='1'&page='1'" 		--> �������� ��� ����.
*/
function getURLHash(sURL){
	var sSourceURL = sURL || window.location.toString(); 
	var sURLHash = "";
	
	if(sSourceURL.indexOf("#") > -1){
		sURLHash = sSourceURL.split("#")[1];
	}
	
	return sURLHash;
}

/**
* �������ڷ� ���� QueryString ������ ���ڿ��� Hash Table������ ������Ʈ�� ��ȯ�Ͽ� ��ȯ
* @name		changeQueryStringToObject
* @function
* @param 	{String} 		sQueryString 	QueryString ������ ���ڿ�
* @returns 	{Hash Table} 				Hash Table( Ű : �� ) ���·� ��ȯ�� ������Ʈ
* @see		changeObjectToQueryString
* @see		getURLParameter
* @see		getURLHash
* @example
* changeQueryStringToObject();
* changeQueryStringToObject("");
* // ���: {}
*
* changeQueryStringToObject("query=nhn&cate=1&page=1");
* // ���: {query : "nhn", cate : "1", page : "1"}
*/
function changeQueryStringToObject(sQueryString){
    var htObject = {};
    var aParams = [];
	var sQuery = sQueryString || "";
	
    if(sQuery.indexOf("&") > -1){
		aParams = sQuery.split("&");
	}else{
		aParams[0] = sQuery;
	}
    
    for(var i = 0, nLength = aParams.length; i < nLength; i++){
        if(aParams[i].indexOf("=") > -1){
            var aParam = aParams[i].split("=");
            htObject[aParam[0]] = aParam[1];
        }
    }
    
    return htObject;
}

/**
* �������ڷ� ���� Hash Table ������ ������Ʈ(htObject)�� QueryString ������ ���ڿ��� ��ȯ�Ͽ� ��ȯ
* @name		changeObjectToQueryString
* @function
* @param 	{Hash Table} 	htObject 	Hash Table( Ű : �� ) ������ ������Ʈ
* @returns 	{String} 				QueryString ���·� ��ȯ�� ���ڿ� 
* @see		changeQueryStringToObject
* @example
* changeObjectToQueryString();
* changeObjectToQueryString({});
* // ���: ""
*
* changeObjectToQueryString({query : "nhn", cate : "1", page : "1"});
* // ���: "query=nhn&cate=1&page=1"
*/
function changeObjectToQueryString(htObject){
	var aParam = [];

	for(var key in htObject){
		aParam.push(key + "=" + htObject[key]);
	}

	return aParam.join("&");
}

/**
* IE6���� Background-Image ��� �� ������ ���� ����
* @name		stopFlicker
* @function
* @example
* // ������ ������ �ѹ��� �����ϸ� �ǹǷ� �͸��Լ��� ���� (����)
* (function(){
* 	function stopFlicker(){
*		var m = document.uniqueID //IE ���� 
*		&& document.compatMode //�������� ������ ����� standard/quirk���� ���� : IE6 �̻�, FF, opera9 
*		&& !window.XMLHttpRequest //IE6 ���� 
*		&& document.execCommand ; //IE4 �̻� 
* 
*		try{
*			if(!!m) m("BackgroundImageCache", false, true); 
*		}catch(e){};
* 	}
* })();
*/
function stopFlicker(){
	var m = document.uniqueID && //IE ���� 
			document.compatMode && //�������� ������ ����� standard/quirk���� ���� : IE6 �̻�, FF, opera9 
			!window.XMLHttpRequest && //IE6 ���� 
			document.execCommand; //IE4 �̻� 
 
	try{
		if(!!m){
			m("BackgroundImageCache", false, true); //IE6 only
		}
	}catch(oh){
	}
}

/**
* �������ڷ� ���� ù��° ������Ʈ(elUpper)�� �ι�° ������Ʈ(elMaybeLower)�� �����ϰ� �ִ��� ���θ� ��ȯ
* @name		contains
* @function
* @param 	{HTML Element} 	elUpper 			���� ������Ʈ
* @param 	{HTML Element} 	elMaybeLower 	�˻��Ϸ��� ���� ������Ʈ
* @returns 	{Boolean} 						���� ���� (true: ���ų� ������, false: �������� ����)
* @example
* <div id="div_1">
* 	<div id="div_1_1">
* 		<span id="span_1">This is contains Function</span>
* 	</div> 
* </div>
* <div id="div_2"></div>
* 
* <script type="text/javascript">
* 	var elDiv1 = document.getElementById("div_1");
* 	var elDiv1_1 = document.getElementById("div_1_1");
* 	var elSpan1 = document.getElementById("span_1");
* 	var elDiv2 = document.getElementById("div_2");
*
* 	contains(elDiv1, elDiv1);		// �� �������ڰ� ���� ���
* 	contains(elDiv1, elDiv1_1);	// ù��° ��������(elDiv1)�� 1Depth ������ ���
* 	contains(elDiv1, elSpan1);	// ù��° ��������(elDiv1)�� 2Depth ������ ���
* 	// ���: true
*
* 	contains(elDiv1, elDiv2);	// �� ��������(elDiv1, elDiv2)�� �ٸ���, ���� Depth�� ���
* 	contains(elDiv1_1, elDiv1);	// ù��° ��������(elDiv1_1)�� ���� Depth�� ���
* 	// ���: false
* </script>
*/
function contains(elUpper, elMaybeLower){
	if(typeof elUpper.contains != "undefined" && elMaybeLower["nodeType"] == 1){
		return elUpper == elMaybeLower || elUpper.contains(elMaybeLower); //IE ����
	} 
	if(typeof elUpper.compareDocumentPosition != "undefined"){
		return elUpper == elMaybeLower || Boolean(elUpper.compareDocumentPosition(elMaybeLower) & 16); //��Ÿ
	} 
	while(elMaybeLower && elUpper != elMaybeLower){
		elMaybeLower = elMaybeLower["parentNode"];
	}

	return elMaybeLower == elUpper;
}


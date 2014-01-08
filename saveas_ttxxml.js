
//	------------------------
//	Save as a TTX XML
//	------------------------

	function triggerTTXFileDownload(){

		var link = document.createElement('a');
		link.href = 'data:text/plain,' + generateTTXXML();
		var d = new Date();
		var yr = d.getFullYear();
		var mo = d.getMonth()+1;
		var day = d.getDate();
		var hr = d.getHours();
		var min = (d.getMinutes()<10? "0" : "") + d.getMinutes();
		var sec = (d.getSeconds()<10? "0" : "") + d.getSeconds();
		
		link.download = "TTX Data - " + _G.fontsettings.familyname + " - " +yr+"."+mo+"."+day+"-"+hr+"."+min+"."+sec+".ttx";
		link.click();
	}

	function generateTTXXML(){
		var con = '<?xml version="1.0" encoding="ISO-8859-1"?>';
		con += '<ttFont sfntVersion="OTTO" ttLibVersion="2.3">';
		con += genTable_glyphorder({});
		con += genTable_head({});
		con += genTable_hhea({});
		con += genTable_maxp({});
		con += genTable_os_2({});
		con += genTable_name({});
		con += genTable_cmap({});
		con += genTable_post({});
		con += genTable_cff({});
		con += genTable_hmtx({});
		con += '</ttFont>';

		return con;
	}



	function genTable_glyphorder(oa){
		var con = '<GlyphOrder>';
		con += '<GlyphID name=".notdef"/>';

		var count = 0;

		for(var tc=32; tc<_G.fontchars.length; tc++){
			con += '<GlyphID name="' + _G.fontchars[tc].charname + '"/>';
			count++;
		}

		debug("EXPORT TTX - Loop Count = " + count);

		con += '</GlyphOrder>';
		return con;
	}

	function genTable_head(oa){
		var con = '<head>';
		//con += '<!-- Most of this table will be recalculated by the compiler -->';
		con += '<tableVersion value="1.0"/>';
		con += '<fontRevision value="2.04098510742"/>';				// VAR VERSION
		con += '<checkSumAdjustment value="0xfd4639aa"/>';
		con += '<magicNumber value="0x5f0f3cf5"/>';
		con += '<flags value="00000000 00000011"/>';
		con += '<unitsPerEm value="2100"/>';						// VAR UPM?
		con += '<created value="Tue Jul 28 19:44:19 2009"/>';		// VAR CREATED DATE
		con += '<modified value="Tue Jul 28 19:44:19 2009"/>';		// COMPUTED SAVE DATE
		con += '<xMin value="-100"/>';								// COMPUTED
		con += '<yMin value="-100"/>';								// COMPUTED
		con += '<xMax value="4048"/>';								// COMPUTED
		con += '<yMax value="4048"/>';								// COMPUTED
		con += '<macStyle value="00000000 00000000"/>';
		con += '<lowestRecPPEM value="3"/>';
		con += '<fontDirectionHint value="2"/>';
		con += '<indexToLocFormat value="0"/>';
		con += '<glyphDataFormat value="0"/>';		
		
		con += '</head>';
		return con;
	}

	function genTable_hhea(oa){
		var con = '<hhea>';
		con += '<tableVersion value="1.0"/>';
		con += '<ascent value="2100"/>';					// COMPUTED - distance from the baseline to the highest ascender
		con += '<descent value="-147"/>';					// COMPUTED - distance from the baseline to the lowest descender
		con += '<lineGap value="200"/>';					// VAR
		con += '<advanceWidthMax value="2100"/>';			// COMPUTED - max advance width from hmtx table
		con += '<minLeftSideBearing value="-123"/>';		// COMPUTED - min lsb from hmtx
		con += '<minRightSideBearing value="-124"/>';		// COMPUTED - MIN(advance width - lsb - (xMax-xMin))
		con += '<xMaxExtent value="2100"/>';				// COMPUTED - MAX(lsb + (xMax - xMin))
		// italics
		con += '<caretSlopeRise value="1"/>';
		con += '<caretSlopeRun value="0"/>';
		con += '<caretOffset value="0"/>';
		// reserved = 0
		con += '<reserved0 value="0"/>';
		con += '<reserved1 value="0"/>';
		con += '<reserved2 value="0"/>';
		con += '<reserved3 value="0"/>';
		con += '<metricDataFormat value="0"/>';

		// # entries in the hmtx table: GLYPH COUNT!!!
		con += '<numberOfHMetrics value="95"/>';		
		
		con += '</hhea>';
		return con;
	}

	function genTable_maxp(oa){
		var con = '<maxp>';
		con += '<tableVersion value="0x5000"/>';

		//GLYPH COUNT!!
		con += '<numGlyphs value="95"/>';

		con += '</maxp>';
		return con;
	}

	function genTable_os_2(oa){
		var con = '<OS_2>';
		con += '<version value="3"/>';
		con += '<xAvgCharWidth value="2100"/>';			// COMPUTED
		con += '<usWeightClass value="500"/>';			// VAR weight class
		con += '<usWidthClass value="5"/>';				// VAR width class
		con += '<fsType value="00000000 00001000"/>';

		// Subscript
		con += '<ySubscriptXSize value="650"/>';
		con += '<ySubscriptYSize value="600"/>';
		con += '<ySubscriptXOffset value="0"/>';
		con += '<ySubscriptYOffset value="75"/>';
		con += '<ySuperscriptXSize value="650"/>';
		con += '<ySuperscriptYSize value="600"/>';
		con += '<ySuperscriptXOffset value="0"/>';
		con += '<ySuperscriptYOffset value="350"/>';
		con += '<yStrikeoutSize value="50"/>';
		con += '<yStrikeoutPosition value="384"/>';
		con += '<sFamilyClass value="0"/>';
		con += '<panose>';								// http://www.monotypeimaging.com/ProductsServices/pan1.aspx
			con += '<bFamilyType value="2"/>';			// 2 = Latin
			con += '<bSerifStyle value="0"/>';			// 0 = 'any' ...
			con += '<bWeight value="0"/>';
			con += '<bProportion value="0"/>';
			con += '<bContrast value="0"/>';
			con += '<bStrokeVariation value="0"/>';
			con += '<bArmStyle value="0"/>';
			con += '<bLetterForm value="0"/>';
			con += '<bMidline value="0"/>';
			con += '<bXHeight value="0"/>';
		con += '</panose>';
		con += '<ulUnicodeRange1 value="00000000 00000000 00000000 00000001"/>';
		con += '<ulUnicodeRange2 value="00000000 00000000 00000000 00000000"/>';
		con += '<ulUnicodeRange3 value="00000000 00000000 00000000 00000000"/>';
		con += '<ulUnicodeRange4 value="00000000 00000000 00000000 00000000"/>';
		con += '<achVendID value=""/>';
		con += '<fsSelection value="00000000 00000000"/>';
		con += '<fsFirstCharIndex value="32"/>';
		con += '<fsLastCharIndex value="64258"/>';

		// Line Metrics
		con += '<sTypoAscender value="853"/>';			// COMPUTED top of text frame to the next baseline
		con += '<sTypoDescender value="-147"/>';		// COMPUTED asc - dsc = em
		con += '<sTypoLineGap value="200"/>';
		con += '<usWinAscent value="2100"/>';			// COMPUTED yMax for all chars
		con += '<usWinDescent value="315"/>';			// COMPUTED yMin for all chars
		con += '<ulCodePageRange1 value="00100000 00000000 00000000 00000001"/>';
		con += '<ulCodePageRange2 value="00000000 00000000 00000000 00000000"/>';
		con += '<sxHeight value="640"/>';				// COMPUTED - xheight
		con += '<sCapHeight value="832"/>';				// COMPUTED - Hheight
		con += '<usDefaultChar value="0"/>';
		con += '<usBreakChar value="32"/>';
		con += '<usMaxContex value="4"/>';
		
		con += '</OS_2>';
		return con;
	}

	function genTable_name(oa){
		var md = _G.fontsettings;
		
		var con = '<name>';
		con += '   <namerecord nameID="0" platformID="1" platEncID="0" langID="0x0">'+md.copyright+'</namerecord>';
		con += '   <namerecord nameID="1" platformID="1" platEncID="0" langID="0x0">'+md.familyname+'</namerecord>';
		con += '   <namerecord nameID="2" platformID="1" platEncID="0" langID="0x0">'+md.subfamilyname+'</namerecord>';
		con += '   <namerecord nameID="3" platformID="1" platEncID="0" langID="0x0">'+(md.fullname+' ; '+md.version)+'</namerecord>';
		con += '   <namerecord nameID="4" platformID="1" platEncID="0" langID="0x0">'+md.fullname+'</namerecord>';
		con += '   <namerecord nameID="5" platformID="1" platEncID="0" langID="0x0">'+md.version+'</namerecord>';
		con += '   <namerecord nameID="6" platformID="1" platEncID="0" langID="0x0">'+md.fullname+'</namerecord>';
		con += '   <namerecord nameID="8" platformID="1" platEncID="0" langID="0x0">'+md.manufacturername+'</namerecord>'; 
		con += '   <namerecord nameID="9" platformID="1" platEncID="0" langID="0x0">'+md.designername+'</namerecord>';
		con += '   <namerecord nameID="10" platformID="1" platEncID="0" langID="0x0">'+md.description+'</namerecord>'; 
		con += '   <namerecord nameID="11" platformID="1" platEncID="0" langID="0x0">'+md.manufacturerurl+'</namerecord>';
		con += '   <namerecord nameID="12" platformID="1" platEncID="0" langID="0x0">'+md.designerurl+'</namerecord>'; 
		con += '   <namerecord nameID="13" platformID="1" platEncID="0" langID="0x0">'+md.licensedescription+'</namerecord>'; 
		con += '   <namerecord nameID="14" platformID="1" platEncID="0" langID="0x0">'+md.licenseurl+'</namerecord>';
		con += '   <namerecord nameID="0" platformID="3" platEncID="1" langID="0x409">'+md.copyright+'</namerecord>';
		con += '   <namerecord nameID="1" platformID="3" platEncID="1" langID="0x409">'+md.familyname+'</namerecord>';
		con += '   <namerecord nameID="2" platformID="3" platEncID="1" langID="0x409">'+md.subfamilyname+'</namerecord>';
		con += '   <namerecord nameID="3" platformID="3" platEncID="1" langID="0x409">'+(md.fullname+' ; '+md.version)+'</namerecord>';
		con += '   <namerecord nameID="4" platformID="3" platEncID="1" langID="0x409">'+md.fullname+'</namerecord>';
		con += '   <namerecord nameID="5" platformID="3" platEncID="1" langID="0x409">'+md.version+'</namerecord>';
		con += '   <namerecord nameID="6" platformID="3" platEncID="1" langID="0x409">'+md.fullname+'</namerecord>';
		con += '   <namerecord nameID="8" platformID="3" platEncID="1" langID="0x409">'+md.manufacturername+'</namerecord>';
		con += '   <namerecord nameID="9" platformID="3" platEncID="1" langID="0x409">'+md.designername+'</namerecord>';
		con += '   <namerecord nameID="10" platformID="3" platEncID="1" langID="0x409">'+md.description+'</namerecord>'; 
		con += '   <namerecord nameID="11" platformID="3" platEncID="1" langID="0x409">'+md.manufacturerurl+'</namerecord>';
		con += '   <namerecord nameID="12" platformID="3" platEncID="1" langID="0x409">'+md.designerurl+'</namerecord>'; 
		con += '   <namerecord nameID="13" platformID="3" platEncID="1" langID="0x409">'+md.licensedescription+'</namerecord>'; 
		con += '   <namerecord nameID="14" platformID="3" platEncID="1" langID="0x409">'+md.licenseurl+'</namerecord>';
		con += '</name>';

		return con;
	}


	function genTable_cmap(oa){
		var cmapbody = "";
		for(var tc=32; tc<_G.fontchars.length; tc++){
			cmapbody += '<map code="'+_G.fontchars[tc].cmapcode+'" name="' + _G.fontchars[tc].charname + '"/>';
		}

		var con = '<cmap>';
		con += '<tableVersion version="0"/>';
		
		con += '<cmap_format_4 platformID="0" platEncID="3" language="0">';	
		con += cmapbody;
		con += '</cmap_format_4>';

		con += '<cmap_format_6 platformID="1" platEncID="0" language="0">';
		con += cmapbody;
		con += '</cmap_format_6>';
	
		con += '<cmap_format_4 platformID="3" platEncID="1" language="0">';
		con += cmapbody;
		con += '</cmap_format_4>';

		con += '</cmap>';
		return con;
	}

	function genTable_post(oa){
		var con = '<post>';
		con += '<formatType value="3.0"/>';
		con += '<italicAngle value="0.0"/>';
		con += '<underlinePosition value="-75"/>';
		con += '<underlineThickness value="50"/>';
		con += '<isFixedPitch value="0"/>';
		con += '<minMemType42 value="0"/>';
		con += '<maxMemType42 value="0"/>';
		con += '<minMemType1 value="0"/>';
		con += '<maxMemType1 value="0"/>';		
		
		con += '</post>';
		return con;
	}

	function genTable_cff(oa){
		var md = _G.fontsettings;
		var con = '<CFF>';
		con += '<CFFFont name="'+md.familyname+'">';
		con += '<version value="002.000"/>';
		con += '<Notice value="'+md.copyright+'"/>';
		con += '<FullName value="'+md.fullname+'"/>';
		con += '<FamilyName value="'+md.familyname+'"/>';
		con += '<Weight value="'+md.weghtclass+'"/>';
		con += '<isFixedPitch value="0"/>';
		con += '<ItalicAngle value="0"/>';
		con += '<UnderlineThickness value="50"/>';
		con += '<PaintType value="0"/>';
		con += '<CharstringType value="2"/>';
		con += '<FontMatrix value="0.001 0 0 0.001 0 0"/>';
		con += '<FontBBox value="0 0 2100 2100"/>';				// UPM??
		//con += '<FontBBox value="-123 -315 1264 1101"/>';		// UPM??
		con += '<StrokeWidth value="0"/>';
		con += '<Encoding name="StandardEncoding"/>';
		con += '<Private>';
		/*
			con += '<BlueValues value="-15 0 832 847 640 655"/>';
			con += '<OtherBlues value="-206 -200"/>';
			con += '<BlueScale value="0.039625"/>';
			con += '<BlueShift value="7"/>';
			con += '<BlueFuzz value="1"/>';
			con += '<StdHW value="118"/>';
			con += '<StdVW value="135"/>';
			con += '<ForceBold value="0"/>';
			con += '<LanguageGroup value="0"/>';
			con += '<ExpansionFactor value="0.06"/>';
			con += '<initialRandomSeed value="0"/>';
			con += '<defaultWidthX value="580"/>';
			con += '<nominalWidthX value="607"/>';
		*/
		con += '</Private>';
		con += '<CharStrings>';

		con += genCharStringsPostScript();

		con += '</CharStrings>';
		con += '</CFFFont>';
		con += '</CFF>';
		return con;
	}

	function genCharStringsPostScript(){
		var con = '<CharString name=".notdef">endchar</CharString>';
		var lastx, lasty;

		for(var tc=32; tc<_G.fontchars.length; tc++){
			con += '<CharString name="' + _G.fontchars[tc].charname + '">';
			lastx = 0;
			lasty = 0;
			rvar = {};

			debug("GENCHARSTRINGSPOSTSCRIPT: \t starting char " + _G.fontchars[tc].charname);

			for(var ts=0; ts<_G.fontchars[tc].charshapes.length; ts++){
				rvar = _G.fontchars[tc].charshapes[ts].genPostScript(lastx, lasty);
				debug("path " + ts + " returning \t " + JSON.stringify(rvar));
				con += rvar.re;
				lastx = rvar.lastx;
				lasty = rvar.lasty;
			}
			
			con += 'endchar';
			con += '</CharString>';
		}
		return con;
	}


	function genTable_hmtx(oa){
		var con = '<hmtx>';
		con += '<mtx name=".notdef" width="2100" lsb="0"/>';

		for(var tc=32; tc<_G.fontchars.length; tc++){
			con += '<mtx name="' + _G.fontchars[tc].charname + '" width="2100" lsb="20"/>';			// UPM?
		}

		con += '</hmtx>';
		return con;
	}


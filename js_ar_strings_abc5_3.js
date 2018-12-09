
/*

// javscript parsable strings development stuff
// version 7.0 9/12/18

// See www.pouncy.co.uk for author's website


COPYRIGHT NOTICE.
This code is copyright  (C)  by Ian Pouncy 3/12/18.
under the   GNU GENERAL PUBLIC LICENSE,  Version 3, 29 June 2007 , see Free Software Foundation, Inc. <http://fsf.org/>

This means you can use it if you want under the terms of that licence.


This source code  has been registered on github (user name Ianp44) on 9/12/18

*/




var tog_button_ar;

var test_div_id3_7;

// is_thing globals
var is_a;
var is_z;
var is_A;
var is_Z;
var is__;
var is_0;
var is_9;
var is_sp;
var is_sq;
var is_dq;
var is_dot;
var is_colon;


//==

var no_trap_button1;
var ascending_button1;

var sort_by_update_date1;

//==

var rtxt4_5;
var db_txt_sw1;

var sort_db_sw3;




//==
function init_dbtxt(){

db_txt_sw1=1;

clear_dbtxt3();

}


//==
function note_dbtxt(ltxt){

if(db_txt_sw1==1){
rtxt4_5+=ltxt;
rtxt4_5+='\n';
}

}
//==
function clear_dbtxt3(){
rtxt4_5='';
rtxt4_5+='Debug log text:';
rtxt4_5+='\n';

document.getElementById("db_id_thing3").innerHTML='';

}
//==

function pad3_to_fsize5(ltxt,fszf,char1){
var res_txt;

var x;
var len1;
var xlen;
var ztxt1;
var ltxt2;
var dbsw3;
res_txt=ltxt;

dbsw3=false;


len1=ltxt.length;

xlen=fszf-len1;

if(dbsw3){
ltxt2='';
ltxt2+='xlen='
ltxt2+=xlen;
ltxt2+='\n';

note_dbtxt(ltxt2);
}

if(xlen>0){
x=0;
ztxt1='';

if(dbsw3){

ltxt2='';
ltxt2+='xlen='
ltxt2+=xlen;
ltxt2+='\n';

note_dbtxt(ltxt2);
}

while(x<xlen){

if(dbsw3){

ltxt2='';
ltxt2+='x='
ltxt2+=x;
ltxt2+='\n';

note_dbtxt(ltxt2);
}
ztxt1+=char1;

x++;
}
res_txt=ztxt1;
res_txt+=ltxt;


}
/*
res_txt+='[]';
*/
return(res_txt);

}

//==
function create_date_tst_sort_txt_ar(){

var res;


note_dbtxt('doing: create_date_tst_sort_txt_ar');

res=[
'04/5/17',
'03/6/18',
'1/3/13',
'02/8/23',
'03/9/23',
'14/5/17',
'27/5/17',
'14/10/17',
'27/10/17',
'04/5/17',
'03/6/18',
'1/3/13',
'02/2/4',
'03/3/4',
'03/2/23',
'09/2/17'

];

return(res);
}

//==

function date_sort_tst3(){
var txt;
var ltxt;
var dt_ar3_5;
var zindex;
var len1;
var zcmp_func1;


note_dbtxt('doing: date_sort_tst3');

ltxt='';


dt_ar3_5=create_date_tst_sort_txt_ar();
len1=dt_ar3_5.length;










/*
zcmp_func1=date3_cmp3_2;
*/

zcmp_func1=date3_cmp3;


ltxt='';

zindex=new Array();

dt_ar3_5_2=create_date_tst_sort_ar(dt_ar3_5);
len2=dt_ar3_5_2.length;














ltxt+='len1=';
ltxt+=len1;
ltxt+='\n';
ltxt+='len2=';
ltxt+=len2;
note_dbtxt(ltxt);


txt='';
txt+='<br>';
txt+='\n';
txt+='<br>';
txt+='\n';

txt+='Date Array List(3):<br>';
txt+='<br>';
txt+='\n';
txt+='<br>';
txt+='\n';
txt+='<br>';
txt+='\n';

txt+=display_date_array_list3(dt_ar3_5_2,zindex,0);

note_dbtxt('hello pop1234');


txt+='<br>';
txt+='\n';
txt+='<br>';
txt+='\n';

note_dbtxt('doing zsort_dir_array3');


zindex=zsort_dir_array3(dt_ar3_5_2,zcmp_func1);


txt+=display_date_array_list3(dt_ar3_5_2,zindex,1);

note_dbtxt('hello pop1234');


txt+='end of date_sort_tst3';
txt+='<br>';
txt+='\n';
txt+='<br>';
txt+='\n';
/**
note_dbtxt(txt);
*/

return(txt);
/*
document.getElementById("test_output_id3").innerHTML = txt;
*/



}

//==


function pars_brackets_txt(sobj3,func_obj1){
var res;
var res3;
var res5;

var hold;
var lstr1;
var lstr1_2;
var lstr2;
var sobj3_5;
var hold2;


var func_obj1_3;

var lpos2;

hold=sobj3.pos;

skipspaces3(sobj3);

lstr1=new cr_str_str('(');


res3=pars_str3_1(lstr1,sobj3,0);

while(1){
if(!res3){
break;
}

skipspaces3(sobj3);

hold2=sobj3.pos;


lstr1=new cr_str_str(')');
func_obj1_3=create_funcobj1();
func_obj1_3.var1=lstr1;
func_obj1_3.var2=0;

func1=fstring_func;


res5=tfind_func3(sobj3,func1,func_obj1_3);
if(res5.errstat3!=0){
break;
}

lpos2=sobj3.pos;



lstr1_2=sobj3.str3;



lstr2=slice_str_1(lstr1_2,hold2,lpos2-1);


sobj3_5=new cr_prs_str3(lstr2);



func_obj1.errstat3=0;
func_obj1.func_rep_obj=sobj3_5;
func_obj1.var1=lpos2;

return(0);



break;
}

sobj3.pos=hold;
func_obj1.errstat3=-1;
func_obj1.func_rep_obj=null;
func_obj1.var1=-1;

return(-1);


}

//==




function create_date_tst_sort_ar(lar){
var x;
var xlen;
var dt_obj1;
var res1;

var dt_ar3;



var ltxt;
var lstr1;
var sobj3;

var x2;

dt_ar3=new Array();
x2=0;

note_dbtxt('doing: create_date_tst_sort_ar');


x=0;
xlen=lar.length;

while(x<xlen){
if(x2>1000){
sys_error('x2 out of range in create_date_tst_sort_ar');

}














ltxt=lar[x];
ltxt2='';
ltxt2+='x=';
ltxt2+=x;
ltxt2+=', ';
ltxt2+='ltxt=';
ltxt2+=ltxt;

note_dbtxt(ltxt2);

/*
if(!(res3.errstat3==0)){
break;
}
yy=res3.ret_val3;
*/
lstr1=new cr_str_str(ltxt);

sobj3=new cr_prs_str3(lstr1);


res1=pars_date3(sobj3,0);





















if(res1.errstat3!=0){
sys_error('date pars failure in create_date_tst_sort_ar');
}
dt_ar3[x2]=res1.ret_val3;



/*
dt_obj1
*/
x2++;
x++
}

return(	dt_ar3);


}

//



function display_tst_date(dir_array,zindex,x,sw){
var txt;
var str2;
var xlen;
var xlen2;

var dir_obj1;
var d_txt;
var x2;


txt='';
note_dbtxt('doing: display_tst_date');

xlen=dir_array.length;

xlen2=zindex.length;
if(sw==1){

if((x<0)||(x>xlen2)){
sys_error('x out of range in display_tst_date');
}
}


if(sw==1){

x2=zindex[x];


if((x2<0)||(x2>xlen)){
sys_error('x2 out of range in display_tst_date');
}
}















else if(sw==0){
x2=x;
}
else {
sys_error('disallowed value for sw in display_tst_date');

}


























dir_obj1=dir_array[x2];

d_txt=get_zdate_str(dir_obj1);
/*
d_txt+='@@';
*/











txt+='x=';
txt+=x;
txt+=', ';
txt+='x2=';
txt+=x2;

txt+=', ';
txt+='dt=';
txt+=d_txt;
txt+='<br>';
txt+='\n';

note_dbtxt(txt);


return(txt);



}




//==
function display_date_array_list3(dir_array,zindex,sw){
var txt;
var x;
var xlen;
var xlen2;
var zindex;
/*
glob_rep_txt='';
glob_rep_txt+='Local Report<br>\n';

sort_db_sw=false;
*/
txt='';

note_dbtxt('doing display_date_array_list3');


//x=0;
/*
xlen=	dir_array.length;
*/

/*
txt+='File Dir Array List;';
txt+=' xlen='+xlen;
txt+='<br>\n';

txt+='Current File Path<br>\n';
txt+=create_cd_fpath();
txt+='<br>\n';

txt+='<b> Click on Green ';
txt+=generate_load_button_txt4();
txt+=' to open the file next to it.<br>\n';

zindex=zsort_dir_array(dir_array);
*/

if(sw==0){
xlen2=dir_array.length;
}
else
if(sw==1){


xlen2=zindex.length;
 }
 else {
sys_error('disallowed value for sw in display_date_array_list3');

 }

x=0;
while(x<xlen2){

txt+=display_tst_date(dir_array,zindex,x,sw);

x++;
}
/*
document.getElementById("report_text").innerHTML =glob_rep_txt;
*/

return(txt);
}


//==
function zsort_dir_array3(dir_array,cmp_func1){
var x;
var x2;
var xlen;
var xlen2;

//var is_ok;
var zindex;
var zindexsz;
var lres;
var ltxt5;

var sort_db_sw2;


sort_db_sw2=true;


zindex=new Array();
zindexsz=0;
if(sort_db_sw3){
note_dbtxt('doing: zsort_dir_array3 ');

/*
glob_rep_txt+='zsort_dir_array here<br>\n';
*/
}
xlen2=0;

x=0;
xlen=dir_array.length;
while(x<xlen){
	/*
if(sort_db_sw){

glob_rep_txt+=dump_ar7(zindex, zindexsz,dir_array);
glob_rep_txt+='<br>\n';
}
*/


 lres=zbin_search3(zindex,zindexsz,x, dir_array,cmp_func1);
//lres=zindexsz;
if(sort_db_sw2){
ltxt5=	'x='+x+', lres='+ lres+' zsort_dir_array';
note_dbtxt(ltxt5);

/*
glob_rep_txt+='x='+x+', lres='+ lres+' zsort_dir_array (1)<br>\n';
*/

}
//insert x in zindex at lres place
//slide up from lres to zindexsz
x2=zindexsz-1;
while(x2>=lres){
//glob_rep_txt+='x2='+x2+' zsort_dir_array (2)<br>\n';

zindex[x2+1]=zindex[x2];

x2--;
}
zindex[lres]=x;

zindexsz++;


x++;
}

return(zindex);

}


//==
function zbin_search3(zindex,zindexsz,x, dir_array,zcmp_func3){

var chk_count;
var x;
var xlen;
var xlen_half;
var xlen4;
var res;
var obj1;
var obj2;
var index_0;
var ltxt5;


if(sort_db_sw3){

note_dbtxt('Doing: zbin_search3');

ltxt5='';
ltxt5+='zindexsz='+zindexsz;
ltxt5+=', x='+x;
note_dbtxt(ltxt5);

/*
glob_rep_txt+='zindexsz='+zindexsz;
glob_rep_txt+=', x='+x;
glob_rep_txt+=', fname='+dir_array[x].fname;
*/

}
xlen4=dir_array.length;

chk_count=0;
if(sort_db_sw3){

note_dbtxt(' zbin_search(0)<br>\n');

/*glob_rep_txt+=' zbin_search(0)<br>\n';
*/

}
xlen=zindexsz;
index_0=0;

while(1){
if(chk_count>150){
sys_error('chk_count out of range in zbin_search3');
}
chk_count++;

xlen_half=Math.round((xlen+index_0)/2);
if((xlen-index_0)==1){
xlen_half=index_0;
}
/*
if(xlen_half<0){
xlen_half=0;
}
*/
if(sort_db_sw3){
note_dbtxt(' zbin_search(1)<br>\n');
	/*
glob_rep_txt+='index_0='+index_0;
glob_rep_txt+=', xlen='+xlen;
glob_rep_txt+=', xlen_half='+xlen_half;

glob_rep_txt+=' zbin_search(1)<br>\n';
*/

}
if(index_0==xlen){
//completed
return(xlen);

}

if(xlen_half>=zindexsz){
res=0;
}else {
if((xlen_half<0)||(xlen_half>=zindexsz)){
sys_error('xlen_half out of range in zbin_search');
}
if((x<0)||(x>=xlen4)){
sys_error('x out of range in zbin_search');
}

obj2=dir_array[zindex[xlen_half]];
obj1=dir_array[x];

res=zcmp_func3(obj1,obj2);
/*
res=zcmp_func1(obj1,obj2);
*/

}
if(res<0){ //obj1 has precedence
//take bottom half
xlen=xlen_half;
if(sort_db_sw3){
note_dbtxt(' zbin_search (res<0)<br>\n');
/*
glob_rep_txt+=' zbin_search (res<0)<br>\n';
*/

}
}else {
//take top half
index_0=xlen_half;
if((xlen-xlen_half)==1){
index_0=xlen;

}
if(sort_db_sw3){
note_dbtxt(' zbin_search (res>=0)<br>\n');
/*
glob_rep_txt+=' zbin_search (res>=0)<br>\n';
*/

}
}


}

;

}



//==
function date3_cmp3_2(dt1,dt2){

var res;
res=date3_cmp3(dt2,dt1);
return(res);

}

function date3_cmp3(dt1,dt2){
	var res;

	if(dt1.zyear<dt2.zyear){
	return(-1);

	}

	if(dt1.zyear>dt2.zyear){
	return(1);

	}
	if(dt1.zmonth<dt2.zmonth){
	return(-1);

	}

	if(dt1.zmonth>dt2.zmonth){
	return(1);

	}

	if(dt1.zday<dt2.zday){
	return(-1);

	}

	if(dt1.zday>dt2.zday){
	return(1);

	}
	return(0);


}




//==

function disp_dbtxt(){
var ltxt3;

ltxt3=zdump5_2_7(rtxt4_5,0);

/*
ltxt3=rtxt4_5;
*/

ltxt3+='hello pop3';
ltxt3+='<br>\n';
document.getElementById("db_id_thing3").innerHTML=ltxt3;


}

//
function zdump5_2_7(txt,sw){
var ltxt;
var x;
var l;
var c;
var ch;
var rtxt;
var nlsw_f;
/*
var convert_squote;
*/


//sw convert for no <br> case for ajax data submission
nlsw_f=0;
if(sw==7){
nlsw_f=1;
sw=0;

}
/*
convert_squote=0;
if(sw==9){
convert_squote=1;
sw=0;

}
*/





ltxt="";
l=txt.length;
x=0;
while(x<l){
//ltxt+=txt.charAt(x);
ch=txt.charAt(x);

if(sw==1){
res4=chk_conv_char3(ch);

if(res4!='5'){
ltxt+=res4;

}else {
ltxt+=ch;
}



}else
if(sw==9){
if(ch=="\'"){
ltxt+="\\\'";
}else

if(ch=="\n"){
ltxt+=" ";
}else

{
ltxt+=ch;;

}
}
else
if((sw==0)||(res4=='5')){
//switch(txt.charAt(x)){
switch(ch){
//case '<':ltxt+="@@&lt;";
case '<':ltxt+="&lt;";break;
case '>':ltxt+="&gt;";
break;
case '"':ltxt+="&quot;";
break;

/*
case '&':ltxt+='&bamp;';
*/
case '&':ltxt+='&amp;';

break;

case "'":ltxt+="\'";
/*
if(convert_squote==0){
ltxt+="\'";
}else {
ltxt+="\\\'";
}
*/
break;

/*
case "\":ltxt+="\\";
break;
*/


case '\n':{
if(nlsw_f==0){
ltxt+="<br>";
}

else {
ltxt+="\n";

}
}

break;

//default:ltxt+=txt.charAt(x);
default:ltxt+=ch;

break;
}
}
else {
sys_error('disallowed value of sw in zdump5_2_7');


}

x++;
}
return(ltxt);
}


//==
//==

//==
//==
function init_tog_buttons_index3(){


ascending_button1=init_tog_obj("id1_date_sort_order","Date Sort Order", "(Descending)","(Ascending)");

sort_by_update_date1=init_tog_obj("id1_date_sort_update1","Sort By ", "Update Date","Actual Date");

}

function chk_sort_ascending(){
var res;
 res=ascending_button1.is_on3;

return(res);
}

function chk_sort_update(){
var res;
 res=sort_by_update_date1.is_on3;

return(res);
}


//

function init_tog_buttons(){
no_trap_button1=init_tog_obj("id1_no_trap_button","Error Trap Toggle ", "(Traps Off)","(Traps On)");
}


function chk_traps_on(){
var res;

res=no_trap_button1.is_on3;

return(res);

}

function create_tog_obj1(lbutton_id2,ltxt1,ltxt2,ltxt3){
	this.is_on3=false;
	this.button_id=lbutton_id2;
	this.ztxt1=ltxt1;
	this.ztxt2=ltxt2;
	this.ztxt3=ltxt3;


	return(this);


}

//==
//==
function create_tog_init_ar(){
var res;

res=[

['Sheena ','(On)','(Off)','sheen'],
['Mum ','(On)','(Off)','mum'],
['Jane ','(On)','(Off)','jane']


];
return(res);

}
//==

function set_tog_on15(tog_ar5,x){

var xlen;
var lobj1;

xlen=tog_ar5.length;

if((x<0)||(x>=xlen)){
sys_err(' x out of range in set_tag_on15');

}

lobj1=tog_ar5[x];

lobj1.is_on3=true;

set_tog_obj1(lobj1);

}

//==
function set_togs3(tog_ar1,tag_ar1,lar3){
var x;
var tag_txt1;
var xlen;
var obj1;
var x2;

x=0;
xlen=lar3.length;
while(x<xlen){
tag_txt1=lar3[x];
/*
x3=find_tag_on15(ztxt,tag_tog_ar);
*/

x2=find_tag_on15(tag_txt1,tag_ar1);
if(x2!=-1){

set_tog_on15(tog_ar1,x2);
}


/*
set_tog_obj1(obj1);
*/

x++;
}

}



//==

function init_all_tog_buttons(){
var lab_stem_nm;
var tog_obj_ar_nm;
var lar3;
var xlen;
var txt;

init_tog_buttons_index3();


lab_stem_nm='tog_button_id_';
tog_obj_ar_nm='tog_button_ar';

lar3=create_tog_init_ar3();

xlen=lar3.length;

txt=generate_toggle_button_set_txt(lab_stem_nm,tog_obj_ar_nm,xlen);


document.getElementById("tog_buttons_id3").innerHTML = txt;


tog_button_ar=generate_tog_button_ar(lab_stem_nm,lar3);

init_tog_buttons2(tog_button_ar);


}


function init_tog_buttons2(lar3){
var x;

var xlen;
var obj1;


x=0;
xlen=lar3.length;
while(x<xlen){
obj1=lar3[x];

set_tog_obj1(obj1);

x++;
}

}

function generate_tog_button_ar(tog_id_stm_nm,lar3){
var res;

var res5;

var x;
var xlen;
var tog_button_id;

var ltxt1;
var ltxt2;
var ltxt3;

var lar5;

res=new Array();
x=0;
xlen=lar3.length;

while(x<xlen){
tog_button_id=tog_id_stm_nm;
tog_button_id+=x;
lar5=lar3[x];
ltxt1=lar5[0];
ltxt2=lar5[1];
ltxt3=lar5[2];

res5=new create_tog_obj1(tog_button_id,ltxt1,ltxt2,ltxt3);
res[x]=res5;
x++;
}
return(res);
}

function generate_toggle_button_set_txt(tog_id_stm_nm,tog_obj_ar_nm,sz){
var x;
var txt;

txt='';
x=0;
while(x<sz){
txt+=create_toggle_button(tog_id_stm_nm,tog_obj_ar_nm,x);

x++;
}
return(txt);
}

function create_toggle_button(tog_id_stm_nm,tog_obj_ar_nm,x3){

var txt;
/*
var tog_obj;
*/

txt='';

txt+='<button id="';
txt+=tog_id_stm_nm;
txt+=x3;
txt+='"';
txt+='onclick="tog_tog_obj1(';
txt+=tog_obj_ar_nm;
txt+='[';
txt+=x3;
txt+='])">unset tog button</button>'; ;

txt+='<br>\n';

return(txt);



}


//==
function init_tog_obj_set(tog_id_stm_nm,ltxt1,ltxt2,ltxt3,x3){
var res;
var lbutton_id2;

button_id2=tog_id_stm_nm;
button_id2+=x3;

res=new create_tog_obj1(lbutton_id2,ltxt1,ltxt2,ltxt3);
set_tog_obj1(res);
return(res);
}


function init_tog_obj(lbutton_id2,ltxt1,ltxt2,ltxt3){
var res;
res=new create_tog_obj1(lbutton_id2,ltxt1,ltxt2,ltxt3);
set_tog_obj1(res);
return(res);
}



function set_tog_obj1(obj1){
var z;
var button_id3;
var ltxt5;
var bcol;

button_id3=obj1.button_id;
ltxt5=obj1.ztxt1;
ltxt5+=' ';
if(obj1.is_on3==false){
	bcol='white';
ltxt5+=obj1.ztxt2;

}
else
if(obj1.is_on3==true){
	bcol='yellow';
ltxt5+=obj1.ztxt3;

}else {
	rerror('disallowed value for is_on3 in set_tog_obj1');
}





z=document.getElementById(button_id3);
z.style.backgroundColor=bcol;

z.innerHTML=ltxt5;

/*
.innerHTML = '';
*/





}







function tog_tog_obj1(obj1){
if(obj1.is_on3==false){
obj1.is_on3=true;
}
else
if(obj1.is_on3==true){
obj1.is_on3=false;

}else {
	rerror('disallowed value for is_on3 in tog_tog_obj1');
}
set_tog_obj1(obj1);

launch_tag_list_query_z3();


}


//==



//==



//creates parsable string object from str object
function cr_prs_str3(lstr1){
this.str3=lstr1;
this.pos=0;

return(this);

}


function fault_func(){
var x;


x=1;




}

//creates string object from intrinsic string
function cr_str_str(s){
var x;
var xlen;
xlen=s.length;
this.len=s.length;
this.chars=new Array();
x=0;
while(x<xlen){
this.chars[x]=s.charCodeAt(x);
x++;
}
return(this);

}
//==

/*
function app_str_slice_str_obj(str1,str2,x1,x2){
var x;
var xlen;
var str2_str;
//???
str2_str=str1.length;

xlen=str2.len;

if(x1<0){
rerror('x1 <0 in app_str_slice_str_obj');

}
if(x2<0){
x2=xlen;
}
if(x2>=xlen){
x2=xlen;
}
xlen=x2;

x=x1;
while(x<xlen){
str1.chars[str2_str+x]=str2.chars[x];
x++;
}

}
*/

//==

//appends str2 to str1
function app_str_str_obj(str1,str2){
var x;
var xlen;
var str2_str;
//???
str2_str=str1.length;

xlen=str2.len;
x=0;
while(x<xlen){
str1.chars[str2_str+x]=str2.chars[x];
x++;
}

}








//==
function create_ret_obj2(){
this.ret_val3=0;
this.errstat3=-1;
return(this);
}
//==

function create_ret_obj(){
var res;
res=new create_ret_obj2();
return(res);

}

//==

// from date routines

//==
function zformat1(lnum){
var ltxt5;
var ltxt7;

ltxt5=''+lnum;
ltxt7=pad3_to_fsize5(ltxt5,2,'0');

return(ltxt7);

}
//

function get_zdate_str(zdate){
var txt;
var ltxt5;
var ltxt7;

txt='';


/*
txt+=zdate.zday;
*/

txt+=zformat1(zdate.zday);
txt+='/';

txt+=zformat1(zdate.zmonth);


/*
txt+=zdate.zmonth;
*/
txt+='/';
/*

txt+=zdate.zyear;
*/
txt+=zformat1(zdate.zyear);



return(txt);



}
//==

//==
function get_zdate_str5_6(zdate){
var txt;
var ltxt5;

txt='';

//##a2
ltxt5=''+zdate.zday;
txt+=pad3_to_fsize5(ltxt5,3,'@');

txt+='/';
txt+=zdate.zday;
txt+='/';
txt+=zdate.zmonth;
txt+='/';
txt+=zdate.zyear;
return(txt);



}


//==

function create_zdate(){
this.ztot_days=0;
this.z_isleapyr=true;
this.tot_months=0
this.wkdaynm=0;
this.zyear=0;
this.zday=1;
this.zmonth=1;
return (this);

}
//==

function pars_date3(sobj3,sw){
var res1;
var res_date;
var dd;
var mm;
var yy;
var hold;
var zfailed;

var date_sep_char;

if(sw==0){
date_sep_char='/';

}
else
if(sw==1){

date_sep_char='_';
}
else {
rerror('disallowed value for sw in pars_date3');

}



zfailed=true;

res1=create_ret_obj();

/*
res1.ret_val3=0
res1.errstat3=-1;
return(res1);
*/


hold=sobj3.pos;

while(1){

res3=get_num_sbj3(sobj3,0);
if(!(res3.errstat3==0)){
break;
}
dd=res3.ret_val3;

if(!pars_ins_str3_1(date_sep_char,sobj3,0)){
break;
}

res3=get_num_sbj3(sobj3,0);
if(!(res3.errstat3==0)){
break;
}
mm=res3.ret_val3;

if(!pars_ins_str3_1(date_sep_char,sobj3,0)){
break;
}

res3=get_num_sbj3(sobj3,0);
if(!(res3.errstat3==0)){
break;
}
yy=res3.ret_val3;

zfailed=false;
break;
}

//==
if(zfailed){
sobj3.pos=hold;
res1.ret_val3=0
res1.errstat3=-1;
return(res1);
}


res_date=new create_zdate();

/*
this.zyear=0;
this.zday=1;
this.zmonth=1;
*/
res_date.zday=dd;
res_date.zmonth=mm;
res_date.zyear=yy;


res1.ret_val3=res_date;
res1.errstat3=0;
return(res1);


}



//==
//creates string object from another string object

function cr_str_str_obj(s){
var x;
var xlen;
xlen=s.len;
this.len=s.len;
this.chars=new Array();
x=0;
while(x<xlen){
this.chars[x]=s.chars[x];
x++;
}
return(this);

}

function cr_istr_sobj3_2(sobj1){
var res;
var lstr1;
var lstr2;
var lpos5;


lstr1=sobj1.str3;

lpos5=sobj1.pos;


lstr2=slice_str_1(lstr1,lpos5,-1);


res=cr_istr_str(lstr2);
return(res);


}


function cr_istr_sobj3(sobj1){
var res;
var lstr1;

lstr1=sobj1.str3;

res=cr_istr_str(lstr1);
return(res);


}

//creates intrinsic string from string object
function cr_istr_str(s){
var res;
var x;
var xlen;
res="";
xlen=s.len;
x=0;
while(x<xlen){
res+=String.fromCharCode(s.chars[x]);
x++;
}
return(res);
}


//=
//compare two my string objects
function cmp_str_obj(str1,str2){
//var res;
var x;
var xlen1;
var xlen2;
var c1;
var c2;

x=0;
xlen1=str1.len;
xlen2=str2.len;

while(1){
if(x==xlen1){
if(x==xlen2)return(0);
else return(-1);
}else if(x==xlen2){
return(1);

}else{

c1=str1.chars[x];
c2=str2.chars[x];

/*
if(a1[x]<a2[x])return(-1);
if(a1[x]>a2[x])return(1);
*/
if(c1<c2)return(-1);
if(c1>c2)return(1);
}
x++;

}


}

//==
function append_str_obj_slice(sobj3_1,sobj3_2,x1,x2){
var c;
var x1;
var x2;
var x3;

var xlen;
var xlen2;

var lstr;
var lstr2;

lstr=sobj3_1.str3;
lstr2=sobj3_2.str3;
/*
x1=sobj3_2.pos
x2=sobj3_1.pos;
*/

x3=lstr.len;

xlen=lstr2.len;

if(x1<0){
rerror('x1 <0 in append_str_obj_slice');

}
if(x2<0){
x2=xlen;
}
if(x2>=xlen){
x2=xlen;
}
xlen2=x2;

/*
x=x1;
*/

while(1){
//if(endofbuf())return;

/*
c=getlexchar3(sobj3_2);
*/

if(x1>=xlen2){
c=-1;
}else {
c=getlexchar2(lstr2,x1);
}

if(c==-1){
/*
sobj3_1.pos=x2;
*/
lstr.len=x3;

return;
}

lstr.chars[x3]=c;

/*
if((c!=is_sp)&&(c!=10)&&(c!=13))return;
*/
/*
bufpos++;
*/
x1++;
x3++;
/*
sobj3_2.pos++;
*/

}


}

//==


//==

function append_str_ob3(sobj3_1,sobj3_2){
var c;
var x1;
var x2;

var lstr;
var lstr2;

lstr=sobj3_1.str3;
lstr2=sobj3_2.str3;
x1=sobj3_2.pos
/*
x2=sobj3_1.pos;
*/

x2=lstr.len;

while(1){
//if(endofbuf())return;

/*
c=getlexchar3(sobj3_2);
*/

c=getlexchar2(lstr2,x1);

if(c==-1){
sobj3_1.pos=x2;
lstr.len=x2;

return;
}

lstr.chars[x2]=c;

/*
if((c!=is_sp)&&(c!=10)&&(c!=13))return;
*/
/*
bufpos++;
*/
x1++;
x2++;
/*
sobj3_2.pos++;
*/

}


}

//==
/*
function clear_err_reps3_5(){
document.getElementById("err10").innerHTML = '';


}
*/

//==

function sys_error(ltxt){

throw(ltxt);

}


function rerror(ltxt){

sys_error(ltxt);

}


//==

function init_vars_305(){

test_div_id3_7 ='test_output_id3';


}

//==
/*
function rep_error3_5(ltxt){
var ltxt3;

ltxt3='Error:'+ltxt+'<br>\n';

document.getElementById("err10").innerHTML = ltxt3;


}
*/
//==



function demo_test_str_obj3(cmd_cd_str){
var tst_txt;
var txt1;
var ltxt3;

var rtxt;

/*
try{
*/
ltxt3='';
note_dbtxt('hello 345\n');

if(false){
ltxt3+='hello pop3 4';
ltxt3+='<br>\n';


document.getElementById(test_div_id3_7).innerHTML = ltxt3;
}

//rerror('123');
/*
return(0);
*/

txt1=document.forms["form3_5"]["arg1"].value;
tst_txt=document.forms["form3_5"]["arg2"].value;

/*
txt1=document.forms["tst_form1"]["text_str1"].value;
tst_txt=document.forms["tst_form1"]["text_str2"].value;
*/

rtxt='';
rtxt+='demo test str output(7)';
rtxt+='<br>\n';
rtxt+='cmd_cd_str=';
rtxt+=cmd_cd_str;
rtxt+='<br>\n';
rtxt+='txt1=';
rtxt+=txt1;
rtxt+='<br>\n';
rtxt+='tst_txt=';
rtxt+=tst_txt;
rtxt+='<br>\n';

rtxt+=test_str_obj3_2(txt1,tst_txt,cmd_cd_str);

/*
if(cmd_cd_str=='test1'){
rtxt+=test_str_obj3(txt1,tst_txt);
}

else
if(cmd_cd_str=='test2'){


rtxt+=test_str_obj3_2(txt1,tst_txt,1);


}











else

if(cmd_cd_str=='get_num_zint')

{

//lab 3 2
;
rtxt+=test_str_obj3_2(txt1,tst_txt,3);
}

//lab 3 2 5

else

if(cmd_cd_str=='get_num_frac3')

{


// lab 3 5
rtxt+=test_str_obj3_2(txt1,tst_txt,5);


}
else {
document.getElementById(test_div_id3_7).innerHTML = rtxt;
rerror('unknown cmd_cd_str in demo_test_str_obj3(2)');

}
*/


document.getElementById(test_div_id3_7).innerHTML = rtxt;


/*
document.getElementById("rep_id3").innerHTML = rtxt;
*/

/*
}
catch(err){
rep_error(err);

}
*/

}
//==
function string_tst_pre_trap_init(){
init_vars6_7();
init_vars_305();

}


function string_tst_init(){
init_is_funcs();

}







































function do_program_tst(cmd_cd_str){
string_tst_pre_trap_init();

if(	chk_traps_on()){
do_program_tst3(cmd_cd_str);

}
else {
do_program_tst5(cmd_cd_str);

}
}






function do_program_tst5(cmd_cd_str){
	/*
string_tst_pre_trap_init();
*/
/*

try{
*/
init_dbtxt();
clear_dbtxt3();
string_tst_init();

demo_test_str_obj3(cmd_cd_str);
disp_dbtxt();
/*
}
catch(err){
rep_error(err);

}
*/
}



function do_program_tst3(cmd_cd_str){
string_tst_pre_trap_init();

try{
init_dbtxt();
clear_dbtxt3();

string_tst_init();


demo_test_str_obj3(cmd_cd_str);
disp_dbtxt();

}
catch(err){
rep_error(err);

}

}

//==
/*
var lab_var_pars_string;
var lab_var_pars_string_and_sp;
var lab_var_get_num_zint;
var lab_var_get_num_frac3;
var lab_var_get_num_whole_frac;
var lab_var_chk_error_case;

var lab_var_append_str_obj_slice;


var lab_var_append_tst1;
*/
//==













function fstring_func(sobj3,func_obj){
var res;
var hold;
var dbsw5;
var res3;
var lstr1;

var sw3;


dbsw5=false;

if(dbsw5){
note_dbtxt('doing fstring_func ');
}

hold=sobj3.pos;

lstr1=func_obj.var1;
sw3=func_obj.var2;
res3=pars_str3_1(lstr1,sobj3,sw3);
/*
res=pars_date3(sobj3,0);
*/
/*
func_obj.errstat5=res.errstat3;
*/

if(!res3){
func_obj.errstat5=-1;
if(dbsw5){
note_dbtxt('fstring_func 1 ');
note_dbtxt('no match');
}

return(-1);
}

if(dbsw5){
note_dbtxt('fstring_func 2 ');
note_dbtxt(' match');
}
/*
func_obj.func_rep_obj=res.ret_val3;
*/
func_obj.func_rep_obj=null;
func_obj.errstat5=0;
func_obj.pos=hold;
return(0);


}
//==





function fdate3_func(sobj3,func_obj){
var res;
var hold;
var dbsw5;

dbsw5=false;

if(dbsw5){
note_dbtxt('doing fdate ');
}

hold=sobj3.pos;

res=pars_date3(sobj3,0);

func_obj.errstat5=res.errstat3;

if(res.errstat3!=0){
if(dbsw5){
note_dbtxt('fdate 1 ');
note_dbtxt('no match');
}

return(-1);
}

if(dbsw5){
note_dbtxt('fdate 2 ');
note_dbtxt(' match');
}
func_obj.func_rep_obj=res.ret_val3;
func_obj.pos=hold;
return(0);


}
//==

function create_funcobj1_2(){
this.errstat5=-2;
this.pos=-1;
this.func_rep_obj=null;
this.var1=null;
this.var2=null;
this.var3=null;
return(this);


}
function create_funcobj1(){
var res;
res= new 	create_funcobj1_2();
return(res);
}

//==

/*
function create_funcobj1_2(){
this.var1=null;
this.var2=null;
this.var3=null;
return(this);

s
}
function create_funcobj1(){
var res;
res= new 	create_funcobj1_2();
}
*/

//==
function is_eol3(sobj3){
var llen3;

llen=sobj3.str3.len;
if(sobj3.pos>=llen){
return(true);
}
return(false);

}
//==
//==
/*


create_ret_obj2(){
this.ret_val3=0;
this.errstat3=-1;
return(this);
}*/
function tfind_func3(sobj3,func1,func_obj1){

	var res;
	var hold;
	res=create_ret_obj2();
	hold=sobj3.pos;
while(1){
if(is_eol3(sobj3)){
	sobj3.pos=hold;
		res.ret_val3=0;
	res.errstat3=-1;

return(res);

}


if(func1(sobj3,func_obj1)==0){

res.ret_val3=sobj3.pos;
	res.errstat3=0;

return(res);

}

sobj3.pos++;

}



}
//==

function test_str_obj3(txt1,tst_txt){
var res;

res= test_str_obj3_2(txt1,tst_txt,0);
return(res);
}
//==

function test_str_obj3_2(txt1,tst_txt,sw)
{
var txt;
var dtxt;
var ftxt;
var str_obj;
var str_obj2;
var lstr1;

var ltxt1;
var lstr2;
var lstr3;

var lpos2;

var res5;
var func_obj1;
var func1;


var zparsed;

var sobj3;
var lpos5;
var zparsflag;
var sobj1;
var res1;
var date_txt3;
var zdate_obj;


ltxt1='';

 zparsed='not_set';
lpos5=-7;

clear_err_reps3();
//txt="";
//cold_init();
//display_all_labtab();
/*
dtxt=document.forms["prgform"]["textin"].value;
*/
dtxt=tst_txt;

ltxt1+='txt1=';
ltxt1+=txt1;
ltxt1+='<br>\n';
ltxt1+='dtxt=';
ltxt1+=dtxt;
ltxt1+='<br>\n';

/*
str_obj=new cr_str_str(dtxt);
*/

str_obj2=new cr_str_str(dtxt);
/*
str_obj.chars[4]=32+1;
*/

ltxt1+='sw=';
ltxt1+=sw;
ltxt1+='<br>\n';



lstr1=new cr_str_str(txt1);

sobj1=new cr_prs_str3(lstr1);

sobj3=new cr_prs_str3(str_obj2);

lstr3=sobj3.str3;



ltxt1+='sobj1=';
ltxt1+=cr_istr_sobj3(sobj1);
ltxt1+='<br>\n';
ltxt1+='sobj3=';
ltxt1+=cr_istr_sobj3(sobj3);
ltxt1+='<br>\n';


/*if(sw==0){
*/
if(sw==lab_var_pars_string){

ltxt1+='doing: pars string (5)';
ltxt1+='<br>\n';

zparsflag=false;

if(pars_str3_1(lstr1,sobj3,0)){
zparsflag=true;

lpos5=sobj3.pos;

zparsed='true';
}else {
lpos5=-5;

zparsed='false';

}






}
else
/*
if(sw==1){
*/

if(sw==lab_var_tst_fsort_date1){
ltxt1+='doing: date_sort_tst3';
ltxt1+='<br>\n';



ltxt1+=date_sort_tst3();

}

else
/*
if(sw==1){
*/

if(sw==lab_var_tst_fdate1){
ltxt1+='doing: find date in pars string with skipspaces (7)';
ltxt1+='<br>\n';

























skipspaces3(sobj3);







if(true){

func_obj1=create_funcobj1();
func1=fdate3_func;

res5=tfind_func3(sobj3,func1,func_obj1);
if(res5.errstat3!=0){
ltxt1+='no date parsed/found';
}else {


zdate_obj=func_obj1.func_rep_obj;
lpos2=func_obj1.pos;


date_txt3=get_zdate_str(zdate_obj);
ltxt1+='parsed ok';
ltxt1+='<br>\n';
ltxt1+='date_txt3(2)=';
ltxt1+=date_txt3;
ltxt1+='<br>\n';

ltxt1+='lpos2=';
ltxt1+=lpos2;

ltxt1+='<br>\n';

}

}















else {
ltxt1+='not done yet';
}

ltxt1+='<br>\n';


}

else
if(sw==lab_var_f_pars_str1){
ltxt1+='doing: find pars string (6) ';
ltxt1+='<br>\n';
/*
ltxt1+='not done yet';
*/

func_obj1=create_funcobj1();
func_obj1.var1=lstr1;
func_obj1.var2=1;
/*
func1=fdate3_func;
*/
func1=fstring_func;


res5=tfind_func3(sobj3,func1,func_obj1);
if(res5.errstat3!=0){
ltxt1+='string not parsed/found';
}else {
lpos2=func_obj1.pos;
ltxt1+='parsed ok';
ltxt1+='<br>\n';

ltxt1+='lpos2=';
ltxt1+=lpos2;

ltxt1+='<br>\n';


}



ltxt1+='<br>\n';



}else

//==
if(sw==lab_var_pars_bracket_txt){
ltxt1+='doing: pars bracket text (5)';
ltxt1+='<br>\n';


func_obj1=create_funcobj1();
/*
func_obj1.var1=lstr1;
func1=fdate3_func;
func1=fstring_func;
*/
ltxt1+='not done yet';
ltxt1+='<br>\n';



}
//==


else
if(sw==lab_var_pars_string_and_sp){
ltxt1+='doing: pars string with skipspaces (5)';
ltxt1+='<br>\n';

skipspaces3(sobj3);
zparsflag=false;

if(pars_str3_1(lstr1,sobj3,0)){
zparsflag=true;

lpos5=sobj3.pos;

zparsed='true';
}else {
lpos5=-5;

zparsed='false';

}


}

else
/*
if(sw==3){
*/

if(sw==lab_var_append_tst1){
ltxt1+='doing: append test 1 (5)';
ltxt1+='<br>\n';

/*
ltxt1+='get_num_sbj sw==';
ltxt1+=lab_var_append_tst1;

ltxt1+='<br>\n';
ltxt1+='sobj1=';
ltxt1+=cr_istr_sobj3(sobj1);
ltxt1+='<br>\n';
ltxt1+='sobj3=';
ltxt1+=cr_istr_sobj3(sobj3);
ltxt1+='<br>\n';
ltxt1+='doing: function';
ltxt1+='<br>\n';
*/

append_str_ob3(sobj3,sobj1);

/*
ltxt1+='sobj1=';
ltxt1+=cr_istr_sobj3(sobj1);
ltxt1+='<br>\n';
ltxt1+='sobj3=';
ltxt1+=cr_istr_sobj3(sobj3);
ltxt1+='<br>\n';
*/

}


else

//==
if(sw==lab_var_remtsp){
ltxt1+='doing: date remove trailing spaces test 1 (0)';
ltxt1+='<br>\n';


skipspaces5_r(sobj3,0);


}
else
//==

if(sw==lab_var_date_pars1){
ltxt1+='doing: date pars1 test 1 (0)';
ltxt1+='<br>\n';

/*
ltxt1+='get_num_sbj sw==';
ltxt1+=sw;
*/

/*
ltxt1+='<br>\n';
ltxt1+='sobj1=';
ltxt1+=cr_istr_sobj3(sobj1);
ltxt1+='<br>\n';

ltxt1+='sobj3=';
ltxt1+=cr_istr_sobj3(sobj3);
ltxt1+='<br>\n';
*/

ltxt1+='doing: function';
ltxt1+='<br>\n';

if(true){
res1=pars_date3(sobj1,0);

if(res1.errstat3!=0){
ltxt1+='pars failed';
ltxt1+='<br>\n';

}else {

zdate_obj=res1.ret_val3;

date_txt3=get_zdate_str(zdate_obj);
ltxt1+='parsed ok';
ltxt1+='<br>\n';
ltxt1+='date_txt3=';
ltxt1+=date_txt3;
ltxt1+='<br>\n';

}

}

}




else
/*
if(sw==3){
*/

if(sw==lab_var_get_num_zint){

ltxt1+='doing: get num int 1 (0)';
ltxt1+='<br>\n';

/*
ltxt1+='get_num_sbj sw==0';
ltxt1+='<br>\n';
*/

skipspaces3(sobj1);
/*
res_num=0.0892;
*/
res_num=get_num_sbj(sobj1,0);
ltxt1+='<br>\n';
ltxt1+='res_num=';
ltxt1+=res_num;

ltxt1+='<br>\n';
ltxt1+='<br>\n';



}
else
/*
if(sw==5){
*/
if(sw==lab_var_get_num_frac3){

/*
ltxt1+='get_num_sbj sw==1';
ltxt1+='<br>\n';
*/
ltxt1+='doing: get num frac 1 (0)';
ltxt1+='<br>\n';

skipspaces3(sobj1);

res_num=get_num_sbj(sobj1,1);
ltxt1+='res_num=';
ltxt1+=res_num;

ltxt1+='<br>\n';
ltxt1+='<br>\n';



}

else
if(sw==lab_var_append_str_obj_slice)

{

ltxt1+='doing: append str obj slice (0)';
ltxt1+='<br>\n';


append_str_obj_slice(sobj3,sobj1,3,9);



}
else {
rerror('disallowed value of sw in test_str_obj3_2 (5)');

}

if(false){
zparsflag=false;

if(pars_str3_1(lstr1,sobj3,0)){
zparsflag=true;

lpos5=sobj3.pos;

zparsed='true';
}else {
lpos5=-5;

zparsed='false';

}


//str_obj.chars[4]=32+1;
ltxt1+='lstr1=';
/*
ltxt1+='@';
*/
ltxt1+=cr_istr_str(lstr1);
ltxt1+='<br>\n';

ltxt1+='str_obj2=';
ltxt1+='\'';

ltxt1+=cr_istr_str(str_obj2);
ltxt1+='\'';

ltxt1+='<br>\n';

ltxt1+='lstr3=';
ltxt1+='\'';

ltxt1+=cr_istr_str(lstr3);
ltxt1+='\'';

ltxt1+='<br>\n';


ltxt1+='zparsed=';
ltxt1+=zparsed;
ltxt1+='<br>\n';

ltxt1+='lpos5=';
ltxt1+=lpos5;
ltxt1+='<br>\n';

if(zparsflag){

lstr2=slice_str_1(str_obj2,lpos5,-1)

ltxt1+='lstr2=';
ltxt1+=cr_istr_str(lstr2);
ltxt1+='<br>\n';
}

}

ltxt1+='<br>\n';
ltxt1+='<br>\n';

ltxt1+='zparsed=';
ltxt1+=zparsed;
ltxt1+='<br>\n';

ltxt1+='lpos5=';
ltxt1+=lpos5;
ltxt1+='<br>\n';

ltxt1+='<br>\n';
ltxt1+='sobj1=';
ltxt1+='\'';

ltxt1+=cr_istr_sobj3(sobj1);
ltxt1+='\'';

ltxt1+='<br>\n';
ltxt1+='sobj3=';
ltxt1+='\'';

ltxt1+=cr_istr_sobj3(sobj3);
ltxt1+='\'';

ltxt1+='<br>\n';
ltxt1+='sobj1.pos=';
ltxt1+=sobj1.pos;
ltxt1+='<br>\n';
ltxt1+='sobj3.pos=';
ltxt1+=sobj3.pos;
ltxt1+='<br>\n';

if(true){
ltxt1+='sobj1 (from pos)=';
ltxt1+='\'';

ltxt1+=cr_istr_sobj3_2(sobj1);
ltxt1+='\'';

ltxt1+='<br>\n';

ltxt1+='sobj3 (from pos)=';
ltxt1+='\'';

ltxt1+=cr_istr_sobj3_2(sobj3);
ltxt1+='\'';
ltxt1+='<br>\n';
}
ltxt1+='<br>\n';
ltxt1+='<br>\n';
ltxt1+='<br>\n';
ltxt1+='<br>\n';
ltxt1+='<br>\n';

return(ltxt1);

/*
document.getElementById("parserror_id").innerHTML = ftxt;
*/



}

//==

function test_str_obj3_2_7(txt1,tst_txt,sw)
{
var txt;
var dtxt;
var ftxt;
var str_obj;
var str_obj2;
var lstr1;

var ltxt1;
var lstr2;
var lstr3;

var sobj3;
var lpos5;
var zparsflag;
var sobj1;

ltxt1='';


clear_err_reps3();
//txt="";
//cold_init();
//display_all_labtab();
/*
dtxt=document.forms["prgform"]["textin"].value;
*/
dtxt=tst_txt;

ltxt1+='txt1=';
ltxt1+=txt1;
ltxt1+='<br>\n';
ltxt1+='dtxt=';
ltxt1+=dtxt;
ltxt1+='<br>\n';

/*
str_obj=new cr_str_str(dtxt);
*/

str_obj2=new cr_str_str(dtxt);
/*
str_obj.chars[4]=32+1;
*/



lstr1=new cr_str_str(txt1);

sobj1=new cr_prs_str3(lstr1);

sobj3=new cr_prs_str3(str_obj2);

lstr3=sobj3.str3;

if(sw==0){
;
}
else
if(sw==1){
skipspaces3(sobj3);


}

else
if(sw==3){

ltxt1+='get_num_sbj sw==0';
ltxt1+='<br>\n';

skipspaces3(sobj1);
/*
res_num=0.0892;
*/
res_num=get_num_sbj(sobj1,0);
ltxt1+='<br>\n';
ltxt1+='res_num=';
ltxt1+=res_num;

ltxt1+='<br>\n';
ltxt1+='<br>\n';



}
else
if(sw==5){

ltxt1+='get_num_sbj sw==1';
ltxt1+='<br>\n';

skipspaces3(sobj1);

res_num=get_num_sbj(sobj1,1);
ltxt1+='res_num=';
ltxt1+=res_num;

ltxt1+='<br>\n';
ltxt1+='<br>\n';



}

else {
rerror('disallowed value of sw in test_str_obj3_2');

}

/*
zparsflag=false;


if(pars_str3_1(lstr1,sobj3,0)){
zparsflag=true;

lpos5=sobj3.pos;

zparsed='true';
}else {
lpos5=-5;

zparsed='false';

}
*/


//str_obj.chars[4]=32+1;
/*
ltxt1+='lstr1=';
*/
/*
ltxt1+='@';
*/
/*
ltxt1+=cr_istr_str(lstr1);
ltxt1+='<br>\n';

ltxt1+='str_obj2=';
ltxt1+=cr_istr_str(str_obj2);
ltxt1+='<br>\n';

ltxt1+='lstr3=';
ltxt1+=cr_istr_str(lstr3);
ltxt1+='<br>\n';


ltxt1+='zparsed=';
ltxt1+=zparsed;
ltxt1+='<br>\n';

ltxt1+='lpos5=';
ltxt1+=lpos5;
ltxt1+='<br>\n';

if(zparsflag){

lstr2=slice_str_1(str_obj2,lpos5,-1)

ltxt1+='lstr2=';
ltxt1+=cr_istr_str(lstr2);
ltxt1+='<br>\n';
}

return(ltxt1);

/*
document.getElementById("parserror_id").innerHTML = ftxt;
*/



}

//==
function test_str_obj(){
var txt;
var dtxt;
var ftxt;
var str_obj;
var str_obj2;
/*
try{
	*/
clear_err_reps();
//txt="";
//cold_init();
//display_all_labtab();
dtxt=document.forms["prgform"]["textin"].value;
str_obj=new cr_str_str(dtxt);
str_obj.chars[4]=32+1;
str_obj2=new cr_str_str_obj(str_obj);
//str_obj.chars[4]=32+1;
ftxt=cr_istr_str(str_obj2);
document.getElementById("parserror_id").innerHTML = ftxt;

/*
}
catch(err){
rep_error(err);

}
*/
}

//==

function slice_str_1(lstr1_3,x,y){
var lstr2;
var x2;
var xlen;
var x3;

if(y==-1){

y=lstr1_3.len;

}

lstr2=new cr_str_str('');
if(x<0){
rerror('x < 0 in slice_str_1');

}

x3=0;

x2=x;
while(1){
c2=getlexchar2(lstr1_3,x2);
if(c2==-1){
break;
/*
return(lstr2);
*/

}
if(x2>=y){
break;
/*
return(lstr2);
*/

}

lstr2.chars[x3]=c2;

x2++;
x3++;

}
lstr2.len=x3;

return(lstr2);

}



//==

function pars_ins_str3_1(str1,sobj2,sw){
var lstr1;
var res;

lstr1=new cr_str_str(str1);

res=pars_str3_1(lstr1,sobj2,sw);
return(res);


}

//==

//lstr1 is not a parsable string
//sobj2 is  a parsable string


function pars_str3_1(lstr1,sobj2,sw){
var c;
var c2;

var lstr3;

var x;
var x3;

x=0;
x3=sobj2.pos
/*
lstr3=sobj1.str3;
*/
lstr3=sobj2.str3;

if(sw==0){
note_dbtxt('lable 1 in pars_str3_1');

while(1){
//if(endofbuf())return;
c2=getlexchar2(lstr1,x);
c=getlexchar2(lstr3,x3);
/*
c=getlexchar3(sobj2);
*/
/*
if(sw!=0){
rerror('sw not 0 in  pars_str3_1; non case compare not implemented');
}
*/
if((c2==-1)||(c2==10)||(c2==13)){
sobj2.pos=x3;

return(true);
}
if((c==-1)||(c==10)||(c==13)){
return(false);
}
if(c!=c2){
return(false);
}

/*
bufpos++;
*/
x3++;
x++;



}

}else if(sw==1) {

note_dbtxt('lable 3 in pars_str3_1');

while(1){
//if(endofbuf())return;
c2=getlexchar2(lstr1,x);
c=getlexchar2(lstr3,x3);
/*
c=getlexchar3(sobj2);
*/
/*
if(sw!=0){
rerror('sw not 0 in  pars_str3_1; non case compare not implemented');
}
*/

if((c2==-1)||(c2==10)||(c2==13)){
sobj2.pos=x3;

return(true);
}
if((c==-1)||(c==10)||(c==13)){
return(false);
}



if((is_a<=c)&&(c<= is_z)){
c-=(is_a-is_A);
}

if((is_a<=c2)&&(c2<= is_z)){
c2-=(is_a-is_A);
}


if(c!=c2){
return(false);
}

/*
bufpos++;
*/
x3++;
x++;

}
}
else {
rerror(' disallowed value for sw not 0 in  pars_str3_1');

}




}


//==

//?? is_sp

//==

function skipspaces5_r(sobj3,sw){
var c;
var lstr3;
var is_sp;
var lpos2;
var x;




is_sp=32;
lpos2=sobj3.pos;

lstr3=sobj3.str3;

x=lstr3.len;

while(1){
x--;
if(x<lpos2){
break;
}
//if(endofbuf())return;
c=getlexchar2(lstr3,x);
if((c!=is_sp)&&(c!=10)&&(c!=13)){
break;
}


}

lstr3.len=x+1;

}



//==
function skipspaces3(sobj1){
var c;
/*
var lstr3;
*/

var is_sp;

is_sp=32;
/*
lstr3=sobj1.str3;
*/
while(1){
//if(endofbuf())return;
c=getlexchar3(sobj1);
if((c!=is_sp)&&(c!=10)&&(c!=13))return;
/*
bufpos++;
*/

sobj1.pos++;

}
}

/*
???

function skipspaces3(sobj1){
var c;
var lstr3;

lstr3=sobj1.str3;

while(1){
//if(endofbuf())return;
c=getlexchar3(sobj1);
if((c!=is_sp)&&(c!=10))return;
bufpos++;

}
}

*/
/*

function skipspaces_old(){
var c;
while(1){
//if(endofbuf())return;
c=getlexchar(bufpos);
if((c!=is_sp)&&(c!=10))return;
bufpos++;

}
}
*/


//=
function getlexchar2(lstr1,z){

/*
var lstr3;
lstr3=sobj1.str3;

z=sobj1.pos;
*/

if(z<0)rerror("-ve z index in getlexchar2");
if(z>=lstr1.len)return(-1);
if(z>=lstr1.chars.length)return(-1);

//if(endofbuf())return(-1);
return(lstr1.chars[z]);
}

//==
function getlexchar3(sobj1){
var z;
var lstr3;

lstr3=sobj1.str3;

z=sobj1.pos;

if(z<0)rerror("-ve z index in getlexchar3");
if(z>=lstr3.len)return(-1);
if(z>=lstr3.chars.length)return(-1);

//if(endofbuf())return(-1);
return(lstr3.chars[z]);
}


function getlexchar(z){
if(z<0)rerror("-ve z index in getlexchar");
if(z>=buftxtarray.length)return(-1);
//if(endofbuf())return(-1);
return(buftxtarray[z]);
}
//==
function get_num_sbj3(sobj1,sw){
var res;
var num;
var c;

res= create_ret_obj();
c=getlexchar3(sobj1);

if(!is_num(c)){
res.ret_val3=0
res.errstat3=-1;

}
else {
num=get_num_sbj(sobj1,sw);
res.ret_val3=num;
res.errstat3=0;
}

return(res);



}


//==
function get_num_sbj(sobj1,sw){
var resnum;
var c;
var zdivr;
zdivr=1;

resnum=0;
while(1){
c=getlexchar3(sobj1);
/*
c=getlexchar(bufpos);
*/

//c=buftxtarray[bufpos];
if(!is_num(c))break;
resnum=resnum*10;
resnum+=c-is_0;
if(sw==1)zdivr*=10;

sobj1.pos++;

/*
bufpos++;
*/

}
if(sw==1){resnum=resnum/zdivr;} //calculate fractional part of
//decimal number
return(resnum);
}


//==

/*
// is_thing globals
var is_a;
var is_z;
var is_A;
var is_Z;
var is__;
var is_0;
var is_9;
var is_sp;
var is_sq;
var is_dq;
var is_dot;
var is_colon;

*/


function init_is_funcs(){
//fromCharCode
//charCodeAt

is_a='a'.charCodeAt(0);
is_z='z'.charCodeAt(0);
is_A='A'.charCodeAt(0);
is_Z='Z'.charCodeAt(0);
is__='_'.charCodeAt(0);
is_0='0'.charCodeAt(0);
is_9='9'.charCodeAt(0);
is_sp=' '.charCodeAt(0);
is_dq='"'.charCodeAt(0);
is_sq="'".charCodeAt(0);
is_dot='.'.charCodeAt(0);
is_colon=':'.charCodeAt(0);


}

//==

//returns true if c (single character) is an numeric char
function is_num(c){
return((is_0<=c)&&(c<=is_9));

}



/*
function get_num(sw){
var resnum;
var c;
var zdivr;
zdivr=1;

resnum=0;
while(1){
c=getlexchar(bufpos);
//c=buftxtarray[bufpos];
if(!is_num(c))break;
resnum=resnum*10;
resnum+=c-is_0;
if(sw==1)zdivr*=10;

bufpos++;
}
if(sw==1){resnum=resnum/zdivr;} //calculate fractional part of
//decimal number
return(resnum);
}
*/


function break_istr(c){
var c2;
var listr;
listr="";
//c2=getlexchar(bufpos);
bufpos++;
while(1){
if(endofbuf()){
parserror("Unexpected end of input text in a string literal");
return("");
}
c2=getlexchar(bufpos);
if(c2==c){
bufpos++;
break;// end of string
}
listr+=String.fromCharCode(c2);
bufpos++;

}

return(listr);


}

function is_quotes(c){
if(c==is_dq){
return(true);
}
if(c==is_sq){
return(true);
}
return(false);

}

/*
getlexchar
break_csym
1489:function get_num();
1512:function break_num();
ai_demo_comp_expcomp_upm_1_js8
1582:function break_istr();
1608:function is_quotes();
set_buf_txt
//pars_text
skipspaces
*/



























































































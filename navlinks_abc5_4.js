

/*
// javscript index system development stuff

// version 7.0 9/12/18

// See www.pouncy.co.uk for author's website


COPYRIGHT NOTICE.
This code is copyright (C) by Ian Pouncy 3/12/18.
under the GNU GENERAL PUBLIC LICENSE, Version 3, 29 June 2007 , see Free Software Foundation, Inc. <http://fsf.org/>

This means you can use it if you want under the terms of that licence.


This source code has been registered on github (user name Ianp44) on 9/12/18

*/




//==

var dat_ar5_6;

var nbtag1;
var nbtag2;
var nbtag3;
var seq_num1;

var tag_tog_ar;




//==

var dat_ar=[
//"My Public Site","public.html",
"Home()","default.htm",
"What's New?","new.html",
//"About","about.html",

"My Business Plan Countdown","zindex_bplan1.html",
"New Index (Check This)","zindex1_4_5.html",

"Index","zindex1.html",
"More Background Info","more_info_link2.html",
//"Contact Me","contact.html",
"Upload Help"," upload_help3_2.html",
//"Upload a file (any user)","upload_page2.html",
"Upload a file (any user)","upload_form_page2.html",

"Display Uploaded files.","zindex_disp1.php",

"stop"

];

/*

[demo data removed]


];
*/
//==
/*


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







function disp_dbtxt(){
var ltxt3;

ltxt3=zdump5_2_7(rtxt4_5,0);


document.getElementById("db_id_thing3").innerHTML=ltxt3;


}
*/
//==
function zinit5(){

init_dbtxt();
clear_dbtxt3();


}
//==

function init_tag_vars5_6(){

nbtag1=3;
nbtag2=5;
nbtag3=7;


}

//==
function add_cell_txt3(ltxt1){


var ltdcell;
var ltxt;

ltdcell='<td class="index_padding5_7">';
//ltdcell='<td>';
ltxt='';
ltxt+=ltdcell;
ltxt+='<b>';
ltxt+=ltxt1;

ltxt+='</b>';

ltxt+='</td>';

return(ltxt);



}





function main_index_header1(){
var txt;
txt='';

txt+='<center>';
txt+='\n';

txt+='<table width="700" bcolor="#000" border="1" cellspacing="0" cellpadding="0">';
txt+='\n';

return(txt);
}
//==

function main_index_footer1(){
var txt;
txt='';


txt+='</table>';

txt+='\n';
txt+='<\center>';
txt+='\n';

return(txt);
}


function init_data_array5_6_3_7(){

dat_ar5_6=
[

//entry start
[
'13/3/64', //main date
'13/2/64', //update date
[

'line 1 ',
'line 2 ',
'line 3 '


], // index entry text

'../scitech4', //link
[
nbtag1,
nbtag2,
nbtag3

] //tag array
],

//entry end

[
'24/3/64', //main date
'24/2/64', //update date
[

'line 1a ',
'line 2a ',
'line 3a '


], // index entry text

'../scitech4', //link
[
nbtag1,
nbtag2,
nbtag3

] //tag array
]

//entry end


];

}


//==


//==
function dev_index3_tst(sw){


init_tag_vars5_6();

/*

init_data_array5_6();
*/

init_data_array5_6_3();

if(sw==0){
do_new_array_format3(dat_ar5_6,sw);
}
else
if(sw==1){
do_new_array_format3(dat_ar5_6,sw);


}
else {

sys_err('disallowed value of sw in dev_index3_tst');

}


}

//==

function do_array_line5_6_7(lar){
var txt;
var x
var xlen;



txt='';
x=0;
xlen=lar.length;
while(x<xlen){
if(x!=0){
txt+=',';

}
txt+="'";
txt+=lar[x];
txt+="'";

x++;
}
if(x!=0){
txt+="\n";

}

return(txt);

}


//==
function do_array_line5_6(lar){
var txt;
var x
var xlen;



txt='';
x=0;
xlen=lar.length;
while(x<xlen){
if(x!=0){
txt+=',';

}

txt+=lar[x];

x++;
}
return(txt);

}

//==
function do_array_line1(lar){
var txt;
var x
var xlen;



txt='';
x=0;
xlen=lar.length;
while(x<xlen){
txt+=lar[x];
x++;
}
return(txt);

}

//==
function sys_err(ltxt2){
rerror(ltxt2);
}

//==
function do_new_array_format3_sort_and_tagged1(lar,disp_sw1){
var txt;

var date1_str;
var update_date1_str;

var disp_lar;
var disp_txt;
var lnk_txt;
var lnk_txt2;
var tag_list;

var xlen;

var index_num_str;
var ref_tag_lar;



xlen=lar.length;

if(xlen!=7){
rerror('incorrect lar size in do_new_array_format3_entry');
}

txt='';

date1_str=lar[0];
update_date1_str=lar[1];
index_num_str=lar[2];
ref_tag_lar=lar[3];
disp_lar=lar[4];
lnk_txt=lar[5];
tag_list=lar[6];

if(!is_selected5(tag_list)){

return('');

}

disp_txt=do_array_line1(disp_lar);
/*
disp_txt+='@b3';
*/
lnk_txt2='&nbsp;';
if(lnk_txt==null){
;
}else
if(lnk_txt=='null'){
;
}
else {
lnk_txt2='<a  href="'+lnk_txt+'">'+'(View)'+'</a>';

}



txt+='<tr>';

txt+=add_cell_txt3(date1_str);
txt+=add_cell_txt3(update_date1_str);
if(disp_sw1){
txt+=add_cell_txt3(index_num_str);
}

txt+=add_cell_txt3(disp_txt);
txt+=add_cell_txt3(lnk_txt2);

if(disp_sw1){

disp_txt=do_array_line5_6(tag_list);
txt+=add_cell_txt3(disp_txt);
}



txt+='</tr>';

return(txt);

}


//==
function do_new_array_format3_entry(lar){
var txt;

var date1_str;
var update_date1_str;

var disp_lar;
var disp_txt;
var lnk_txt;
var lnk_txt2;
var tag_list;

var xlen;

var index_num_str;
var ref_tag_lar;



xlen=lar.length;

if(xlen!=7){
rerror('incorrect lar size in do_new_array_format3_entry');
}

txt='';

date1_str=lar[0];
update_date1_str=lar[1];
index_num_str=lar[2];
ref_tag_lar=lar[3];
disp_lar=lar[4];
lnk_txt=lar[5];
tag_list=lar[6];



disp_txt=do_array_line1(disp_lar);

lnk_txt2='<a  href="'+lnk_txt+'">'+'(View)'+'</a>';


txt+='<tr>';

txt+=add_cell_txt3(date1_str);
txt+=add_cell_txt3(update_date1_str);
txt+=add_cell_txt3(index_num_str);


txt+=add_cell_txt3(disp_txt);
txt+=add_cell_txt3(lnk_txt2);


disp_txt=do_array_line5_6(tag_list);
txt+=add_cell_txt3(disp_txt);




txt+='</tr>';

return(txt);

}


//==
function do_new_array_format3_entry3_5(lar){
var txt;

var date1_str;
var update_date1_str;

var disp_lar;
var disp_txt;
var lnk_txt;
var lnk_txt2;
var tag_list;

var xlen;


xlen=lar.length;

if(xlen!=5){
rerror('incorrect lar size in do_new_array_format3_entry');
}

txt='';

date1_str=lar[0];
update_date1_str=lar[1];
disp_lar=lar[2];
lnk_txt=lar[3];
tag_list=lar[4];



disp_txt=do_array_line1(disp_lar);

lnk_txt2='<a  href="'+lnk_txt+'">'+'(View)'+'</a>';


txt+='<tr>';

txt+=add_cell_txt3(date1_str);
txt+=add_cell_txt3(update_date1_str);
txt+=add_cell_txt3(disp_txt);
txt+=add_cell_txt3(lnk_txt2);





txt+='</tr>';

return(txt);

}
//==
function main_index_col_header1(disp_sw1){
var txt;

txt='';



txt+='<tr>';

txt+=add_cell_txt3('Document/<br>Event<br> Date');
txt+=add_cell_txt3('Update Date');
if(disp_sw1){
txt+=add_cell_txt3('Internal Index Number');
}

txt+=add_cell_txt3('Index Entry');
txt+=add_cell_txt3('Link Column');

if(disp_sw1){
/*
disp_txt=do_array_line5_6(t);
*/
txt+=add_cell_txt3('Tags List');
}



txt+='</tr>';
txt+='\n';

return(txt);

}

//==

function do_new_array_format3(lar,sw){
var txt;

var lar5;

var x;
var xlen;

var disp_all_data3;

txt='';
txt+=main_index_header1();

disp_all_data3=false;

if(is_tag_on7('all_data')){
disp_all_data3=true;
}

txt+=main_index_col_header1(disp_all_data3);







x=0;
xlen=lar.length;
while(x<xlen){

lar5=lar[x];
if(lar5==null){

break;
}
/*
if(x>0){
txt+=',';
txt+='\n';

}
*/
if(sw==0){
txt+=do_new_array_format3_entry(lar5);
}else
if(sw==1){
txt+=do_new_array_format3_sort_and_tagged1(lar5,disp_all_data3);
}else
{
sys_err('disallowed value of sw in do_new_array_format3');
}

x++;
}




txt+=main_index_footer1();


document.getElementById("navdiv_index").innerHTML=txt;

}
//==

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
sys_err('disallowed value of sw in zdump5_2_7');


}

x++;
}
return(ltxt);
}


//==

function str_flush5(sobj2,sobj1,hold1,hold2,sw){
var lstr3_1;
var sobj3_1;


if(sw==1){
lstr3_1=new cr_str_str(",");

sobj3_1=new cr_prs_str3(lstr3_1);

append_str_ob3(sobj2,sobj3_1);


lstr3_1=new cr_str_str("\n");

sobj3_1=new cr_prs_str3(lstr3_1);

append_str_ob3(sobj2,sobj3_1);


}


lstr3_1=new cr_str_str("'");

sobj3_1=new cr_prs_str3(lstr3_1);

append_str_ob3(sobj2,sobj3_1);


append_str_obj_slice(sobj2,sobj1,hold1,hold2);

append_str_ob3(sobj2,sobj3_1);

/*
if(sw==1){
lstr3_1=new cr_str_str(",");

sobj3_1=new cr_prs_str3(lstr3_1);

append_str_ob3(sobj2,sobj3_1);
}
lstr3_1=new cr_str_str("\n");

sobj3_1=new cr_prs_str3(lstr3_1);

append_str_ob3(sobj2,sobj3_1);
*/

}


//==

function word_limit_convert3(txt2){
var txt;
var rst_txt;

var ltxt3;
var ltxt5;

var lstr1;
var sobj1;

var lstr2;
var sobj2;

var lstr3;
var sobj3;

var lstr3_1;
var sobj3_1;


var c;
var hold;
var hold2;

var spc_str;

var line_count2;

var maxwidth;
var x3;
var is_sp;

var dbsw3;


lstr1=new cr_str_str(txt2);

sobj1=new cr_prs_str3(lstr1);

lstr2=new cr_str_str('');

sobj2=new cr_prs_str3(lstr2);

lstr3=new cr_str_str('');

sobj3=new cr_prs_str3(lstr3);


maxwidth=70;

spc_str=0;
line_count2=0;

is_sp=32;
rst_txt='';
txt='';
x3=0;
hold1=0;
hold2=hold1;

dbsw3=false;

note_dbtxt('doing word_limit_convert3');

ltxt5='';
ltxt5+='txt2=';
ltxt5+=txt2;
ltxt5+='\n';
note_dbtxt(ltxt5);

/*
sys_err('break word limit');
*/

while(1){

if(line_count2>=120){
sys_err('line_count2 out of range in word_limit_convert3');

}
x3=sobj1.pos;

if(dbsw3){
ltxt5='';
ltxt5+='spc_str=';
ltxt5+=spc_str;
ltxt5+=', ';

ltxt5+='hold1=';
ltxt5+=hold1;
ltxt5+=', ';
ltxt5+='hold2=';
ltxt5+=hold2;
ltxt5+=', ';
ltxt5+='x3=';
ltxt5+=x3;
ltxt5+=', ';
ltxt5+='x3-hold1=';
ltxt5+=x3-hold1;
ltxt5+='\n';
}





c=getlexchar3(sobj1);
if(dbsw3){
if(true){
ltxt5+='c char=';
ltxt5+=String.fromCharCode(c);
ltxt5+='\n';

}
note_dbtxt(ltxt5);
}

if(c==-1){
break;
}


if(c==is_sp){
if(dbsw3){
note_dbtxt('is space');
}
if(spc_str==0){
if(dbsw3){
note_dbtxt('switch into space string');
}
/*
hold2=x3;
*/
spc_str=1;
}
// do nothing


}else {
// not sp
if(dbsw3){

note_dbtxt('is not space');
}
if(spc_str==1){
if(dbsw3){

note_dbtxt('switch out of space string');
}
spc_str=0;
/*
hold2=x3;
*/

// was a space

if(x3-hold1>=maxwidth){
//trip flush
//append hold1 to hold2 to
if(dbsw3){
note_dbtxt('trip flush 1');
}
/*
append_str_obj_slice(sobj2,sobj1,hold1,hold2);
*/

if(line_count2==0){
str_flush5(sobj2,sobj1,hold1,hold2,0);
}
else {
str_flush5(sobj2,sobj1,hold1,hold2,1);

}
line_count2++;

ltxt3=cr_istr_sobj3(sobj2);
if(dbsw3){

ltxt5='';
ltxt5+='ltxt3=';
ltxt5+=ltxt3;
ltxt5+='\n';


note_dbtxt(ltxt5);
}

/*
str_flush5(sobj2,sobj1,hold1,x3,1);
*/


hold1=hold2;
hold2=x3;

}else{
// do nothing

hold2=x3;

}
}
else {

// within characters
if(dbsw3){
note_dbtxt(' within characters');
}
if(false){
if((hold1==hold2)&&(x3-hold1>=maxwidth)){
//trip flush
//append hold1 to x3 to
note_dbtxt('trip flush 2');

/*
append_str_obj_slice(sobj2,sobj1,hold1,hold2);
*/

str_flush5(sobj2,sobj1,hold1,x3,1);

hold2=x3;
hold1=hold2;

}

}

}

}






sobj1.pos++;

}

if(x3==0){
ltxt3="''";
ltxt3+="\n";

return(ltxt3);


}

if(x3>hold1){
if(line_count2==0){
str_flush5(sobj2,sobj1,hold1,x3,0);
}
else {
str_flush5(sobj2,sobj1,hold1,x3,1);



}

}


lstr3_1=new cr_str_str("\n");

sobj3_1=new cr_prs_str3(lstr3_1);

append_str_ob3(sobj2,sobj3_1);


ltxt3=cr_istr_sobj3(sobj2);

if(dbsw3){
note_dbtxt('end lable 1');
note_dbtxt('end lable 2');
}
/*
sys_err('break end of word limit');
*/

return(ltxt3);

/*
}
*/
/* hack to compile */

}




//
function tag_array_convert3(){
var txt;
txt='';
txt+='nbtag1';
txt+=",";
txt+='\n';
txt+='nbtag2';
txt+=",";
txt+='\n';
txt+='nbtag3';
txt+='\n';

return(txt);
}
//==
function create_ret3_var_obj3(){
this.ltxt1='not_set';
this.ltxt2='not_set'
return(this);

}

//==
function create_ret3_var_obj2(){
var res;
res=new create_ret3_var_obj3();
return(res);
}
//==

function fdate3_txt(ltxt3){
var lstr3;
var sobj3;
var ltxt;
var res5;

var func_obj1;
var func1;

var zdate_obj;
var date_txt3;


ltxt='';



lstr3=new cr_str_str(ltxt3);

sobj3=new cr_prs_str3(lstr3);


func_obj1=create_funcobj1();
func1=fdate3_func;


res5=tfind_func3(sobj3,func1,func_obj1);
if(res5.errstat3!=0){
ltxt+='1/1/3 (no_date)';

}
else {

zdate_obj=func_obj1.func_rep_obj;
lpos2=func_obj1.pos;


date_txt3=get_zdate_str(zdate_obj);
ltxt+=date_txt3;

}

return(ltxt);

}

//==
function get_index_date_info1_3(ztxt1,ztxt3){

/*
var lstr1;
var sobj3;

var func_obj1;

var func1;
*/
var res5;
var res3;
/*
var datestr1;
var datestr2;
var lstr3;
var ltxt1_2;
var failed_sw1;
var  zdate_obj;
var lpos2;
*/
var res7;
/*
var hold1;
var hold3;
var date_str_pos_hold;
*/

var ltxt5;


var ns_str;

ns_str='not_set';
/*
res3= create_ret3_var_obj2();

res3.ltxt1='not_set';
res3.ltxt2='not_set';
*/

/*
res3.ltxt1='@a1 '+datestr1;
res3.ltxt2='@a2 '+datestr2;

*/


res3= get_index_date_info3(ztxt1);


res5= get_index_date_info3(ztxt3);

if(res5.ltxt1!=ns_str){

if(res3.ltxt1==ns_str){

/*
res3.ltxt1='@b1'+res5.ltxt1;
*/
res3.ltxt1=res5.ltxt1;
}

}

if(res5.ltxt2!=ns_str){

if(res3.ltxt2==ns_str){
/*
res3.ltxt2='@b2'+res5.ltxt2;
*/

res3.ltxt2=res5.ltxt2;
}else {

ltxt5='';

ltxt5+='dup update date in get_index_date_info1_3(3)';
ltxt5+='\n';
ltxt5+='ztxt1="';
ltxt5+=ztxt1;
ltxt5+='"';
ltxt5+='\n';

ltxt5+='ztxt3="';
ltxt5+=ztxt3;
ltxt5+='"';
ltxt5+='\n';




note_dbtxt(ltxt5);
/*
sys_error(' dup update date in get_index_date_info1_3(3)');
*/

}

}

/*
res3.ltxt1+='(@a1)';
res3.ltxt2+='(@a2)';
*/

return(res3);


}

//==
function get_index_date_info3(txt3){
var lstr1;
var sobj3;

var func_obj1;

var func1;
var res5;




var res3;
var datestr1;
var datestr2;

var lstr3;
var ltxt1_2;

var failed_sw1;

var  zdate_obj;

var lpos2;

var res7;

var hold1;
var hold3;

var date_str_pos_hold;


datestr1='not_set';
datestr2='not_set';

date_str_pos_hold=-1;

res3= create_ret3_var_obj2();

//find date in txt1


lstr1=new cr_str_str(txt3);

sobj3=new cr_prs_str3(lstr1);


func_obj1=create_funcobj1();

//finding update date str:

ltxt1_2='update';

lstr3=new cr_str_str(ltxt1_2);

func_obj1=create_funcobj1();
/*
func_obj1.var1='update';
*/
func_obj1.var1=lstr3;
func_obj1.var2=1;
/*
func1=fdate3_func;
*/
func1=fstring_func;


res5=tfind_func3(sobj3,func1,func_obj1);
if(res5.errstat3==0){
/*
ltxt1+='string not parsed/found';
}else {
*/
hold1=sobj3.pos;
failed_sw1=true;
while(1){
skipspaces3(sobj3);

ltxt1_2='date';

lstr3=new cr_str_str(ltxt1_2);

//lstr3=
if(!pars_str3_1(lstr3,sobj3,0)){
break;
}
skipspaces3(sobj3);
ltxt1_2=':';

lstr3=new cr_str_str(ltxt1_2);

//lstr3=
if(!pars_str3_1(lstr3,sobj3,0)){
break;
}
skipspaces3(sobj3);

hold3=sobj3.pos;

//found update date;
res7= pars_date3(sobj3,0);
if(res7.errstat3!=0){
//didn't find date
sys_error(' expected a date in get_index_date_info1(3)');

}
//got a date
date_str_pos_hold=hold3;

zdate_obj=res7.ret_val3;
date_txt3=get_zdate_str(zdate_obj);
datestr2=date_txt3;

hold3=sobj3.pos;

failed_sw1=false;
break;



break;
}






/*
lpos2=func_obj1.pos;
ltxt1+='parsed ok';
ltxt1+='<br>\n';

ltxt1+='lpos2=';
ltxt1+=lpos2;

ltxt1+='<br>\n';
*/

}
else {
//update str not found;
;

}

//find straight date in txt1

sobj3.pos=0;

func1=fdate3_func;


while(1){
res5=tfind_func3(sobj3,func1,func_obj1);
if(res5.errstat3==0){

/*
ltxt1+='no date parsed/found';
}
*/

zdate_obj=func_obj1.func_rep_obj;

lpos2=func_obj1.pos;

/*
if(lpos2!=hold3){
*/


if(lpos2!=date_str_pos_hold){
date_txt3=get_zdate_str(zdate_obj);
datestr1=date_txt3;
break;

}
}
else {
//couldn't find a date
break;
}


}

/*
res3.ltxt1='@a1 '+datestr1;
res3.ltxt2='@a2 '+datestr2;
*/
res3.ltxt1=datestr1;
res3.ltxt2=datestr2;

return(res3);
}
//==

//==

/*
[demo data removed]

['comment','comment'],
['social','esw']




];

*/
/*

['Mum ','(Off)','(On)','mum'],
['Jane ','(Off)','(On)','jane']

*/

function create_tog_init_ar3(){
var res;

res=[

['Display  all data columns  ','(Off)','(On)','all_data'],

['Select all tags  ','(Off)','(On)','select_all'],

/*
[demo data removed]
*/
['Select comment (comment message) ','(Off)','(On)','comment'],
['Select esw (wrt [???]) ','(Off)','(On)','esw']



];
return(res);

}
//=

function init_tags3(){

tag_tog_ar= create_tog_init_ar3();

}
//==

//
function is_tag_on15(lar5,x){

var xlen;
var lobj1;

xlen=lar5.length;

if((x<0)||(x>=xlen)){
sys_err('  x out of range  in is_tag_on15');

}

lobj1=lar5[x];

return(lobj1.is_on3);


}
//


function find_tag_on15(ltxt,tag_ar3){
var tag_ind_val;
var lar3;

var x;
var xlen;
var ztxt
var xsz;
tag_ind_val=3;
x=0;
xlen=tag_ar3.length;
while(x<xlen){
lar3=tag_ar3[x];
xsz=lar3.length;
if(tag_ind_val>=xsz){
sys_err(' lar3 too small in is_tag_on15');
}
 ztxt=lar3[tag_ind_val];

if(ztxt==ltxt){
return(x);
}


x++;
}
return(-1);

}
//

function is_tag_on7(ztxt){

var x3;
var res3;

x3=find_tag_on15(ztxt,tag_tog_ar);

if(x3==-1){
return(false);
}

res3=is_tag_on15(tog_button_ar,x3);


return(res3);




}

//==
function is_selected5(tags_ar){
var res;

if(is_tag_on7('select_all')){
return(true);
}

res=chk_tag_list5(tags_ar);

return(res);
}

//==
function chk_tag_list5(tags_ar){
var x;
var xlen;
var ztxt;

x=0;
xlen=tags_ar.length;
while(x<xlen){
ztxt=tags_ar[x];

if(is_tag_on7(ztxt)){
return(true);
}

x++;

}
return(false);

}

//=
function create_tag_conds3(){
var res;

res=[

/*
[demo data removed]
*/

['comment','comment'],
['social','esw']


];
return(res);
}



function tags_from_link1_3(ltxt1,lar5){
var res3;
var x;
var lstr1;
var sobj3;

var ltxt1_2;
var ltxt5;

var lstr3;

var lar5;
var lar6;
var x2;
var xlen;
var func_obj1;
var func;
var res5;

res3=new Array();

lstr1=new cr_str_str(ltxt1);

sobj3=new cr_prs_str3(lstr1);

x=0;
x2=0;
xlen=lar5.length;


while(x2<xlen){
if(x>30){
sys_err(' x too large in tags_from_link1_3');

}
sobj3.pos=0;

lar6=lar5[x2];
if(lar6.length!=2){
sys_err(' wrong size for lar6 in tags_from_link1_3');

}

ltxt1_2=lar6[0];

lstr3=new cr_str_str(ltxt1_2);
func_obj1=create_funcobj1();

func_obj1.var1=lstr3;
func_obj1.var2=1;
func1=fstring_func;


res5=tfind_func3(sobj3,func1,func_obj1);
if(res5.errstat3==0){
ltxt5=lar6[1];
res3[x]=ltxt5;
x++;
}
x2++;
}
return(res3);




}


//==
function zlink_add2_convert1_func3(txt1,txt2,txt3,seq_num1_3){
var txt;
var res3;
var res5;

var txt1_2_5;
var txt1_2;

var datestr1;
var datestr2;

var tag_array_extract3;

var tag_array_txt;
var tag_c_lar;

txt='';

txt1_2='null';

 tag_c_lar=create_tag_conds3();

//find datestr1 and datestr2 in tx1,txt3

res5=get_index_date_info1_3 (txt1,txt3);

datestr1=res5.ltxt1;
datestr2=res5.ltxt2;
/*
datestr1=txt1;
datestr2=txt1;
*/
txt+='[';

if(false){
txt+="'@tmp ";
txt+=txt1;
txt+="'";
txt+=",";
txt+='\n';
}




txt+="'";
txt+=datestr1;
txt+="'";
txt+=",";
txt+='\n';

txt+="'";
txt+=datestr2;
txt+="'";
txt+=",";
txt+='\n';

if(true){

txt+=seq_num1_3;
txt+=",";
txt+='\n';
}


if(false){
txt+="'@@@'";
txt+=",";
txt+='\n';
}

//title txt data

txt1_2_5=txt1_2.trim();

txt+='[';

if(txt1_2_5=='null'){
txt+="'null'";
}
else {
txt+=word_limit_convert3(txt1_2_5);
}


txt+=']';
txt+=",";

//main txt data
txt+='[';
if(false){
txt+='@@@';
}else {
txt+=word_limit_convert3(txt3);
}
/*
txt+='\n';
*/
txt+=']';
txt+=",";
txt+='\n';

//main link data
if(txt2==null){
tag_array_txt="'nullwbtg'";
}
else
if(txt2=='null'){
tag_array_txt="'nullwbtg'";
}
else
{

tag_array_extract3=tags_from_link1_3(txt2,tag_c_lar);
tag_array_txt= do_array_line5_6_7(tag_array_extract3);

}

txt+="'";
txt+=txt2;
txt+="'";
txt+=",";
txt+='\n';

//tag array data
txt+='[';
txt+=tag_array_txt;


/*
txt+=tag_array_convert3();
*/
txt+=']';
txt+='\n';





txt+=']';
txt+='\n';
return(txt);
}

//==


//==
/*
function zlink_add2_convert1_func3(txt1,txt2,txt3){
*/

function zlink_add2_convert1_func3_5_6(txt1,txt2,txt3){
var txt;

var txt1_2_5;
var txt1_2;

var datestr1;
var datestr2;

txt='';

txt1_2='null';




datestr1=txt1;
datestr2=txt1;

txt+='[';
txt+="'";
txt+=datestr1;
txt+="'";
txt+=",";
txt+='\n';

txt+="'";
txt+=datestr2;
txt+="'";
txt+=",";
txt+='\n';
if(true){
txt+="'@@@'";
txt+=",";
txt+='\n';
}

//title txt data

txt1_2_5=txt1_2.trim();

txt+='[';

if(txt1_2_5=='null'){
txt+="'null'";
}
else {
txt+=word_limit_convert3(txt1_2_5);
}


txt+=']';
txt+=",";

//main txt data
txt+='[';
if(false){
txt+='@@@';
}else {
txt+=word_limit_convert3(txt3);
}
/*
txt+='\n';
*/
txt+=']';
txt+=",";
txt+='\n';

//main link data

txt+="'";
txt+=txt2;
txt+="'";
txt+=",";
txt+='\n';

//tag array data
txt+='[';
txt+=tag_array_convert3();
txt+=']';
txt+='\n';





txt+=']';
txt+='\n';
return(txt);
}

//==

function zlink_add2_convert1(x){

/*
var ltxt;
var ltxt5_6;
var ltxt5_6_2;
var ltxt5_7;

var ltdcell;
*/
var  txt;
var  txt1;
var  txt2;
var  txt3;



txt='';
/*
txt1=dat_ar3[x];
txt2=dat_ar3[x+1];
txt3=dat_ar3[x+2];
*/


txt1=zdump5_2_7(dat_ar3[x],9);
txt2=dat_ar3[x+1];
txt3=zdump5_2_7(dat_ar3[x+2],9);





txt+=zlink_add2_convert1_func3(txt1,txt2,txt3,seq_num1);
	return (txt);
}

/*

ltdcell='<td class="index_padding">';
//ltdcell='<td>';
ltxt='';
ltxt+='<tr>';
//ltxt+='<td>';
ltxt+=ltdcell;
ltxt+='<b>';
*/


/*
//	ltxt='<a class="navbclass" href="'+dat_ar3[x+1];
//	ltxt='<a  href="'+dat_ar3[x];

ltxt+=	dat_ar3[x];
ltxt+='</b>';

ltxt+='</td>';
//ltxt+='<td>';
ltxt+=ltdcell;
ltxt+='<b>';

ltxt+=dat_ar3[x+2];
ltxt5_6+=dat_ar3[x+2];

ltxt+='</b>';

ltxt+='</td>';
//ltxt+='<td>';
ltxt+=ltdcell;
//ltxt+='<td>';
ltxt+='<b>';
ltxt5_6=dat_ar3[x+1];
ltxt5_6_2=	ltxt5_6.trim();


if(ltxt5_6_2=='null'){
ltxt5_7='&nbsp;';
}else {
//	ltxt+='<a  href="'+dat_ar3[x+1]+'">'+'(View)'+'</a>';
	ltxt5_7='<a  href="'+ltxt5_6+'">'+'(View)'+'</a>';
}
ltxt+=ltxt5_7;

ltxt+='</b>';
ltxt+='</td>';


ltxt+='</tr>\n';

	return (ltxt);
*/




//==
function zlink_add2(x){
	var ltxt;
var ltxt5_6;
var ltxt5_6_2;
var ltxt5_7;

var ltdcell;

ltdcell='<td class="index_padding">';
//ltdcell='<td>';
ltxt='';
ltxt+='<tr>';
//ltxt+='<td>';
ltxt+=ltdcell;
ltxt+='<b>';


//	ltxt='<a class="navbclass" href="'+dat_ar3[x+1]
//	ltxt='<a  href="'+dat_ar3[x]
ltxt+=	dat_ar3[x];
ltxt+='</b>';

ltxt+='</td>';
//ltxt+='<td>';
ltxt+=ltdcell;
ltxt+='<b>';

ltxt+=	dat_ar3[x+2];
ltxt5_6+=	dat_ar3[x+2];

ltxt+='</b>';

ltxt+='</td>';
//ltxt+='<td>';
ltxt+=ltdcell;
//ltxt+='<td>';
ltxt+='<b>';
ltxt5_6=dat_ar3[x+1];
ltxt5_6_2=	ltxt5_6.trim();


if(ltxt5_6_2=='null'){
ltxt5_7='&nbsp;';
}else {
//	ltxt+='<a  href="'+dat_ar3[x+1]+'">'+'(View)'+'</a>';
	ltxt5_7='<a  href="'+ltxt5_6+'">'+'(View)'+'</a>';
}
ltxt+=ltxt5_7;

ltxt+='</b>';
ltxt+='</td>';


ltxt+='</tr>\n';

return (ltxt);


}


/*
zdump5_2_7
*/

function dump_converted_text3(){

	var x;
	var txt;
var ltxt2;

	txt="";
	x=0;
seq_num1=3000;

txt+='[';
txt+="\n";

	while(dat_ar3[x]!="stop"){
	/*
txt+=zlink_add2(x);

*/
if(x>0){
txt+=',';
txt+='\n';

}

txt+= 	zlink_add2_convert1(x);
seq_num1++;

	x+=3;

	}
txt+='];'
txt+="\n";

ltxt2=zdump5_2_7(txt,0);

	document.getElementById("navdiv_index").innerHTML=ltxt2;

disp_dbtxt();


}


//==
function zlink_add(x){
	var ltxt;

	ltxt='<a class="navbclass" href="'+dat_ar[x+1]
	+'">'+dat_ar[x]+'</a><br>\n';
	return (ltxt);


}

function zmain2(){

	var x;
	var txt;
	txt="";
	x=0;
txt+='<center>';

txt+='<table width="600" bcolor="#000" border="1" cellspacing="0" cellpadding="0">';


	while(dat_ar3[x]!="stop"){
	txt+=zlink_add2(x);


	x+=3;

	}
txt+='</table>\n';
txt+='</center>';

	document.getElementById("navdiv_index").innerHTML=txt;



}

function zmain(){
	var x;
	var txt;
	txt="";
	x=0;
	while(dat_ar[x]!="stop"){
	txt+=zlink_add(x);


	x+=2;

	}

	document.getElementById("navdiv").innerHTML=txt;


}


























































































































































































































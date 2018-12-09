
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






var lab_var_stnd_index;
var lab_var_dev_index;
var lab_var_conv_index;

var lab_var_chk_error_case;

var err_id_lab;



//=

function clear_err_reps3(){

document.getElementById(err_id_lab).innerHTML = '';


}

function rep_error(ltxt){
var ltxt3;

ltxt3='Error:'+ltxt+'<br>\n';

if(db_txt_sw1==1){
disp_dbtxt();
}

document.getElementById(err_id_lab).innerHTML = ltxt3;


}

function init_lab_vars3(){


lab_var_stnd_index=1;
lab_var_dev_index=3;
lab_var_conv_index=5;
lab_var_conv_sw_index=7;
lab_var_chk_error_case=15;



}

//==
function do_development_index1(){

dev_index3_tst(0);
if(false){
document.getElementById("navdiv_index").innerHTML='<b>Development Index Text</b><br>';
}


}

//==
//==
function rerror(ltxt){

throw(ltxt);

}

//==



function do_program_tst3_5(cmd_cd_str){
var ltxt3;

clear_err_reps3();

if(false){
ltxt3='';
ltxt3+='cmd_cd_str=';
ltxt3+=cmd_cd_str;
ltxt3+='\n';

ltxt3+='lab_var_stnd_index=';
ltxt3+=lab_var_stnd_index;
ltxt3+='\n';


note_dbtxt(ltxt3);
}


if (cmd_cd_str==lab_var_stnd_index){

zmain2();
}else
if (cmd_cd_str==lab_var_dev_index){
/*
do_development_index1();
*/
dev_index3_tst(0);
}

else
if (cmd_cd_str==lab_var_conv_sw_index){
/*
do_development_index1();
*/
dev_index3_tst(1);
}

else

if (cmd_cd_str==lab_var_conv_index){
dump_converted_text3();
}

else {

rerror('disallowed value of cmd_cd_str in do_program_tst3_5');


}

}

//==

function do_program_tst7(cmd_cd_str){
string_tst_pre_trap_init();

if(	chk_traps_on()){
do_program_tst7_3(cmd_cd_str);

}
else {
do_program_tst7_5(cmd_cd_str);

}
}









//==


function do_program_tst7_5(cmd_cd_str){
/*
string_tst_pre_trap_init();
*/
/*
init_vars6_7();
init_vars_305();
init_is_funcs();
*/


/*
try{
string_tst_init();
*/
clear_dbtxt3();
do_program_tst3_5(cmd_cd_str);
/*
}
catch(err){
rep_error(err);

}
*/



}
//==

//==
function do_program_tst7_3(cmd_cd_str){
/*
string_tst_pre_trap_init();
*/
/*
init_vars6_7();
init_vars_305();
init_is_funcs();
*/


try{
/*
string_tst_init();
*/
clear_dbtxt3();
do_program_tst3_5(cmd_cd_str);

}
catch(err){
rep_error(err);

}



}
//==

function init_vars6_7(){
err_id_lab='errorid3';


}


function zinit7(){
zinit5();

init_vars6_7();
/*
init_vars_305();
*/
init_lab_vars3();




}


























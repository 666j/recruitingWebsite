<?php
header("Content-Type: text/html; charset=UTF-8");
include_once 'opDB.class.php';
session_start();//保存用户信息
$con = new opDB();//数据库操作
//从结果集中获取所有的数据

$response = array("statue" => '1');
//if($_POST['graph_id']!=6){
//	$response = array("statue" => '0');
//}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//使用array_push数组从0开始
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//最后需要数据的数组们
$industry=array();
$jobs=array();
$require=array();

//中间用的数组
$job=array();

//查找所有的行业
$sql = "select distinct KIndustry from industry_job order by KIndustry ";
$res = $con->get_result($sql);//类的方法调用用下划线

//存到$industry
if($res){
$industry=$con->deal_result_withoutname($res,'KIndustry');
}else{$response = array("statue" => '0');}
	

//查找所有的职业
$sql = "select distinct KJob from industry_job  ";
$res = $con->get_result($sql);//类的方法调用用下划线
//存到$job
if($res){
$job=$con->deal_result_withoutname($res,'KJob');
}else{$response = array("statue" => '0');}
echo json_encode($job);	
	
for($i=0;$i<count($job);$i++){
$sql = "select Requirement from industry_job where KJob='$job[$i]' order by KIndustry";
$res = $con->get_result($sql);//类的方法调用用下划线
if($res){
	while($row = mysqli_fetch_assoc($res)){
		array_push($require,$row['Requirement']);
	
	}
	array_push($jobs,array("job"=>$job[$i],"requirement"=>$require));
//	$jobs[$i]=array("job"=>$job[$i],"requirement"=>$require);
}else{
	$response['statue']=0;
}
	}

$response['industry'] = $industry;
$response['jobs'] = $jobs;
echo json_encode($response);

?>
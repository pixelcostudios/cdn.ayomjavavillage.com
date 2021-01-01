<?php
function listFolderFiles($dir,$exclude){ 
    $ffs = scandir($dir); 
    echo '<ul class="ulli">'; 
    foreach($ffs as $ff){ 
        if(is_array($exclude) and !in_array($ff,$exclude)){ 
            if($ff != '.' && $ff != '..'){ 
            if(!is_dir($dir.'/'.$ff)){ 
            echo '<li><a href="'.ltrim($dir.'/'.$ff,'./').'">'.$ff.'</a>'; 
            } else { 
            echo '<li>'.$ff;    
            } 
            if(is_dir($dir.'/'.$ff)) listFolderFiles($dir.'/'.$ff,$exclude); 
            echo '</li>'; 
            } 
        } 
    } 
    echo '</ul>'; 
} 

listFolderFiles('.',array('batangtoru.zip','index.php','edit_page.php','01.xls','02.xls','03.xls','04.xls','05.xls','06.xls','07.xls','08.xls','09.xls','10.xls','11.xls','12.xls','01.xlsx','02.xlsx','03.xlsx','04.xlsx','05.xlsx','06.xlsx','07.xlsx','08.xlsx','09.xlsx','10.xlsx','11.xlsx','12.xlsx','excel_reader2.php')); 
?>
<?php
if(isset($_POST['url'])) {
    $url=$_POST['url'];
    getMetaData($url);
    //echo $url;
}
function getMetaData($url) {
    $site_html=file_get_contents($url);
    $matches=null;
    preg_match_all('~<\s*meta\s+property="(og:[^"]+)"\s+content="([^"]*)~i',$site_html,$matches);
    $ogtags=array();
    for($i=0;$i<count($matches[1]);$i++)
    {
        $ogtags[$matches[1][$i]]=$matches[2][$i];
    }
    echo implode(" ---- ", $ogtags);
    if(empty($ogtags)) {
        $tags = get_meta_tags($url);
        echo implode(" ---- ", $tags);
    }
}
?>
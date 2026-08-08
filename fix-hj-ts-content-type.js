// 淇娴疯瑙嗛TS鍒嗙墖Content-Type
// 鏈嶅姟鍣ㄨ繑鍥瀟ext/vnd.trolltech.linguist; charset=utf-8锛宨OS AVPlayer鏃犳硶璇嗗埆瀵艰嚧榛戝睆
if ($response && $response.headers) {
    var ct = $response.headers['Content-Type'] || $response.headers['content-type'] || '';
    if (ct.indexOf('text/vnd.trolltech.linguist') !== -1) {
        $response.headers['Content-Type'] = 'video/mp2t';
        delete $response.headers['content-type'];
    }
}
$done($response);

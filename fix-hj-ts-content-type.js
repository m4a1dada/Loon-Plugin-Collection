// 淇娴疯瑙嗛TS鍒嗙墖Content-Type
// iOS AVPlayer瑕佹眰TS鏂囦欢Content-Type涓簐ideo/mp2t锛屼絾鏈嶅姟鍣ㄨ繑鍥瀟ext/vnd.trolltech.linguist瀵艰嚧榛戝睆
if ($response && $response.headers) {
    if ($response.headers['Content-Type'] === 'text/vnd.trolltech.linguist' ||
        $response.headers['content-type'] === 'text/vnd.trolltech.linguist') {
        $response.headers['Content-Type'] = 'video/mp2t';
        delete $response.headers['content-type'];
    }
}
$done($response);

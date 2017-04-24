var YoutubeMp3Downloader = require('youtube-mp3-downloader');

//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/usr/local/bin/ffmpeg",        // Where is the FFmpeg binary located?
    "outputPath": "/Users/gabrielmartinez/Dropbox\ \(ASU\)/jams",    // Where should the downloaded and encoded files be stored?
    "youtubeVideoQuality": "highest",       // What video quality should be used?
    "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
    "progressTimeout": 2000                 // How long should be the interval of the progress reports
});

//Download video and save as MP3 file
YD.download("FM7MFYoylVs");

YD.on("finished", function(data) {
    console.log(data);
});

YD.on("error", function(error) {
    console.log(error);
});

YD.on("progress", function(progress) {
    console.log(progress);
});

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

const save_file = (res, oldpath, newpath) => {
    fs.readFile(oldpath, function (err, data) {
        if (err) throw err;
        console.log('File read!');

        // Write the file
        fs.writeFile(newpath, data, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
            console.log('File written!');
        });

        // Delete the file
        fs.unlink(oldpath, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    });

}
const append_json = (filename, new_object) => {
    let data = fs.readFileSync(filename,"utf-8");
    let objects = JSON.parse(data);
    objects.push(new_object);
    fs.writeFileSync(filename,JSON.stringify(objects),"utf-8");
}

http.createServer(function (req, res) {
    if (req.url === '/add') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            pattern_url = 'assets/markers/pattern/' + files.pattern.originalFilename;
            model_url = 'assets/models/' + files.model.originalFilename;
            save_file(res, files.pattern.filepath, pattern_url)
            save_file(res, files.model.filepath, model_url )
            let model = {'name': fields.name , 'src': model_url, 'pattern': pattern_url, 'scale': fields.scale}
            append_json(fields.subject + ".json" , model)
        });
    } else if(req.url === "/generate"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write( fs.readFileSync('generator.html'));
        res.end();
        return res.end();
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = fs.readFileSync('addForm.html');
        res.write(html);
        res.end();
        return res.end();
    }
}).listen(8081);
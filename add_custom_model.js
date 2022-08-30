import * as fs from "fs";


const save_file = (res, oldpath, newpath) => {
    fs.readFile(oldpath, function (err, data) {
        if (err) throw err;
        console.log('File read!');

        // Write the file
        fs.writeFile(newpath, data, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
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
export const add_model = (res, err, fields, files) => {
    let pattern_url = 'assets/markers/pattern/' + files.pattern.originalFilename;
    let model_url = 'assets/models/' + files.model.originalFilename;
    save_file(res, files.pattern.filepath, pattern_url)
    save_file(res, files.model.filepath, model_url )
    let model = {'name': fields.name , 'src': model_url, 'pattern': pattern_url, 'scale': fields.scale}
    append_json(fields.subject + ".json" , model)
}
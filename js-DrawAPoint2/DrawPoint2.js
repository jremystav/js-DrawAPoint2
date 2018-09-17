//DrawPoint1.js
//Vertex Shader program
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute float a_PointSize;\n' +
    'void main(){\n' +
    '   gl_Position = a_Position;\n' + //coordinates
    '   gl_PointSize = a_PointSize;\n' + //sets point size
    '}\n';

//fragment shader
var FSHADER_SOURCE =
    'void main() {\n' +
    '   gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    //retrieve canvas
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('did not work, lacks rendering context');
        return;
    }

    //initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failes to initialize shaders')
        return;
    }

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position')
        return;
    }

    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

    gl.vertexAttrib1f(a_PointSize, 50.0);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}
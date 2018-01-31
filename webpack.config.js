/**
* __dirname是node.js中的一个全局变量，指向当前执行脚本所在的目录
* 生成source map便于调试；使用eval打包源文件模块，在同一个文件中生成完整的source map; 但是对打包后输出的js的执行存在性能和安全的隐患，建议在开发阶段使用
* webpack-dev-server可以构建本地服务，让浏览器监听代码的修改并自动刷新修改的结果
*/
module.exports = {
	devtool: '#eval-source-map',
	entry: __dirname + "/app/main.js",  //唯一入口文件
	output: {
		path: __dirname + "/public",   //打包后的文件存放的地方
		filename: "bundle.js"   //打包后输出文件的文件名
	},
	devServer: {
		contentBase: "./public",  //本地服务器加载的页面所在的目录
		historyApiFallback: true,  //依赖于h5 history api，设置为true，所有的跳转指向index.html
		inline: true   //实时刷新
	}
}

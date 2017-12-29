config = {
   entry: './main.js',
	
   output: {
      path:'/Users/glarimy/Professional/Workspace/Glarimy-ReactJS/glarimy-reactjs-05/target',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7070
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',            
            query: {
               presets: ['es2015', 'react']
            }
         },{
            test: /\.css?$/,
            loader: "style-loader!css-loader"
         }
      ]
   }
}

module.exports = config;
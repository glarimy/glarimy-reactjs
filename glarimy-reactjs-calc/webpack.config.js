config = {
   entry: './main.js',
	
   output: {
      path:'/Users/glarimy/Professional/Workspace/Glarimy-ReactJS/glarimy-react-calc/target',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 9090
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
         }
      ]
   }
}

module.exports = config;

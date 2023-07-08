// mas detalles en webpack.org

const path = require('path')    // path es de la parte de node
const HtmlWebpackPlugin = require('html-webpack-plugin') // traemos al plugin previamente instalado

module.exports = {
  entry:'./src/index.js',   // punto de entrada (donde se encuentra el archivo princial de javascript)
  output: {           // punto de salida 
    path: path.resolve(__dirname,'dist'),   // el nombre de disk es importante no debe ser diferente
    filename: 'main.js'   // el nombre puede ser cualquiere
  },
  resolve: {
    extensions: ['.js'] // estenciones con que se este trabajando como por ejemplo:     .txs , .mjs , .js y otros
  },
  module: {
    rules: [ 
      {
        test: /\.js?$/,  // decir que archivos son necesarios
        exclude: /node_module/, // ignorar o escluir elementos
        use: {   // uso de louder que se instalo previamente
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [  // aqui se agregara los distintos plugin con lo que se esta trabajando
    new HtmlWebpackPlugin({
      inject: true,   // lo primero que va a user activar el inject
      template:'./public/index.html', // html basic donde este
      filename: './index.html'  //  se pondra el la carpeta disk
    })
  ]
}
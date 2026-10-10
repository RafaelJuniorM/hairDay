const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    target: 'web', // informa que o projeto é para web
    mode: "development",
// #### configuração do ponto de entrada e saída do projeto ####
    entry: path.resolve(__dirname, "src", "main.js"), // ponto de partida do projeto, começa pelo src/main.js
    output: { // resultado do build, onde vai ser gerado o arquivo final
        filename: "main.js", // nome do arquivo final
        path: path.resolve(__dirname, "dist") // local onde sera salvo o arquivo final
    },

    // #### configuração do servidor de desenvolvimento ####
    devServer: { 
        static: {
            directory: path.join(__dirname, 'dist'), // pasta onde o servidor vai buscar os arquivos
        },
        port:3000, // porta do servidor
        open: true, // abre o navegador automaticamente
        liveReload: true, // recarrega a página automaticamente quando houver alterações
    }, 
    // #### configuração do plugin para gerar o arquivo HTML ####
    plugins: [new HtmlWebpackPlugin ({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve("src", "assets", "scissors.svg"),
    }),
    // #### configuração do plugin para copiar os arquivos de assets ####
    new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, "src", "assets"), // caminho de origem do assets 
                to: path.resolve(__dirname, "dist", "src", "assets") // caminho de destino do assets
            }
        ]
    })
    ],

    module: {
        rules: [
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    },
                }
            }
        ],
    },
}
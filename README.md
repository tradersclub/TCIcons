# TCIcons

Esse repositorio foi criado com o proposito de substituir temporariamente ou definitivo o processo de subir icones no app do tc.

## Utilizando

1- Instale a biblioteca e seus dependencia:

### Install - ReactJS
```
yarn: yarn add https://github.com/tradersclub/TCIcons.git#v0.1.0 (Olhar no repo a ultima tag)

npm: npm install https://github.com/tradersclub/TCIcons.git#v0.1.0 (Olhar no repo a ultima tag)
```
### Install - React-Native
```
yarn: yarn add react-native-svg react-native-svg-transformer babel-plugin-inline-import

npm: npm install react-native-svg react-native-svg-transformer babel-plugin-inline-import
```
### Upgrade file metro.config.js - React-Native
```
const { getDefaultConfig } = require('metro-config');
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

### Upgrade file of .babelrc - React-Native
```
...
  "plugins": [
    [...],
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      }
    ]
...
```


2- Importe um dos svgs (exemplo: `add`)  
3- Passge o svg como propriedade para o componente `SvgXml`da biblioteca `react-native-svg``  
Exemplo:

```
import { SvgFromXml } from 'react-native-svg';
import { add } from 'tc-svg';
​
export default function Componente(){
​
    return(
        <SvgFromXml
            width={100}
            height={100}
            fill={'#faf'}
            xml={add}
        />);
}
```

## Inserindo novos Icones

​
Para inserir um novo icone basta seguir esse passo a passo:
​

1.  Mover o seu arquivo para a pasts "src/svg";
2.  Abra o arquivo "index.ts", que se encontra dentro da pasta "src/svg"
3.  Adicione o caminho e nome do novo icone:
    ​

```
import _camera from "./camera.svg";

export const camera = _camera;
```

​ 4. Rode `yarn build` (não se esqueça de incluir a pasta `lib` no seu commit)

5. Incremente uma unidade no minor version do pacote no `package.json`​

###### Obs.: Antes de subir os icones Solicitamos que retirem a propriedade "fill" ou "fill-rule" do svg, pois isso impede de modificar as cores dos icones

​

## Gerando um tag (maintainers only)

​
Caso os icones que você acabou de gerar não vao para producão nesse momento, recomendo criar e publicar um tag:
​

1.  Insira o comando:
    > yarn && yarn build \
    > git tag -a {Versão da sua tag ex.: v1.0.1} -m "Mensagem da sua tag"
2.  Suba isso para o gitHub:
    > git push origin {Versão da sua tag inserida alteriormente}

### Autores e Contribuidores

Arthur Geron - Desenvolvedor Front-End
Patrick Chagas - Desenvolvedor Full-Stack

Todos do time Designer são contribuidores e graças a eles temos esses icones top

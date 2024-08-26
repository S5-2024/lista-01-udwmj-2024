<img src="https://github.com/S5-2024/lista-01-udwmj-2024/blob/main/assets/banners%20(4).png">

[![Gabrielle Soares ](https://img.shields.io/badge/Gabrielle_Soares_-black?style=for-the-badge&logo=github)](https://github.com/gabriellesote)
[![Anna Clara](https://img.shields.io/badge/Anna_Clara-black?style=for-the-badge&logo=github)](https://github.com/byasun)
[![gabriel bernardes](https://img.shields.io/badge/gabriel_bernardes-black?style=for-the-badge&logo=github)](https://github.com/Gabber28)
[![lucas ramos](https://img.shields.io/badge/lucas_ramos-black?style=for-the-badge&logo=github)](https://github.com/LucasRramos)
[![Vinicius Godinho ](https://img.shields.io/badge/Vinicius_Godinho_-black?style=for-the-badge&logo=github)](https://github.com/ViniciusMGodinho)
[![Gabriel Evaristo](https://img.shields.io/badge/Gabriel_Evaristo-black?style=for-the-badge&logo=github)](https://github.com/gabsevamac)

<h4 align="center"> <em> Professor responsável: Daniel Paiva </em></h4>

[![PDF](https://img.shields.io/badge/PDF-F05A7E?style=for-the-badge)](https://github.com/S5-2024/lista-01-udwmj-2024/blob/main/assets/lista_exercicio_I-2%5B1%5D.pdf)



## 📌 Sobre

<p>
  Este repositório contém a resolução da lista 1 passada na aula de Usabilidade realizada em 16/08 (Sexta-Feira).
  
 </p>


## 📄 Atividade 

<h3> Explique as vantagens de se utilizar a linguagem de programação JavaScript na
na atualidade.
 </h3>

<details>
  <summary> <h4> ☝️🤓 Resposta</h4> </summary>

<p> JavaScript é uma linguagem de programação que fornece implementações de itens complexos em páginas web. As vantagens de utilizar JS na atualidade se deve em alguns pontos: 
 </p>

* Velocidade: JS tende a ser rápido, por ser executado imediatamente no navegador do client. Desde que não exija recursos externos, o JS não é atrasado por chamadas para um server back-end.  Todos os principais navegadores suportam compilação JIT (Just in time) para o JavaScript, ou seja, não há necessidade de compilar o código antes de executá-lo.
* Simplicidade: Como a sintaxe do JS foi inspirada na do Java, é relativamente fácil de aprender em comparação com outras linguagens populares, como o C++.
* Popularidade:  JS está em toda parte, e com o advento do Node.js é cada vez mais usado no back-end. Sua popularidade é demostrada na quantidade crescente de projetos que utilizam JavaScript em plataformas como GitHub ou StackOverflow.
* Interoperabilidade:  O JavaScript pode ser inserido em qualquer página da web, diferente de outras linguagens de script, como PHP. E pode ser usado em muitos tipos de aplicações devido ao suporte em outras linguagens.
* Carga do servidor: Diminui a demanda nos servidores em geral, por ser executado do lado do client. Portanto, aplicações simples podem, inclusive, não precisar de um servidor.
* Interfaces ricas:  O JS pode ser usado para criar recursos que melhoram muito a interface do usuário e a experiência de um site.
  
</details>



  
 <h3>Explique as vantagens de se utilizar a linguagem de programação PHP na
atualidade.
 </h3>


 
<details>
  <summary> <h4>☝️🤓 Resposta</h4> </summary>

<p>PHP é uma linguagem de programação server side, voltada para o desenvolvimento de aplicações web e criação de site, e também favorece a conexão entre a interface do usuário e o servidor. Existem algumas vantagens de utilizar esta linguagem: </p>

* Desempenho aprimorado:  Com as versões novas do PHP, como a versão 7 e a 8, o desempenho foi aprimorado, fazendo com que as execuções de scripts PHP mais rápida e eficiente, especialmente em aplicações com alta carga.
* Segurança:  O PHP possui diversas extensões e práticas recomendadas que ajudam a garantir a segurança das aplicações, como proteção contra SQL injection, XSS (cross-site scripting), e CSRF (cross-site request forgery).
* Aprendizado fácil:  PHP foi projetada para ser fácil de usar, então manteve a sintaxe que lembrava Perl e C.
* Código aberto: É uma linguagem sem custos e com melhorias constantes, pois qualquer programador pode melhorar seu código, retirando possíveis bugs ou adicionando mais funções.
* Suporte de quantidade de dados:  O PHP consegue executar várias funções simultaneamente sem alterar a velocidade do provedor. Então sites com muito detalhes visuais, ou que manipulam grandes volumes de dados, podem exigir mais recursos para carregamento, e com o PHP é possível executar essas aplicações com o desempenho necessário para garantir uma boa experiência ao usuário.
* Multiplataforma:  O PHP pode operar em vários sistemas como Windows, Linux, Mac OS, entre outros.
* Compatibilidade:  É compatível com diversos bancos de dados, dando dinamismo para carregar os elementos da página sem falhas e com agilidade.  Sem falar que alguns bancos de dados optam também pelo PHP, como, por exemplo: MySQL, Oracle, SQLite, Interbase, Sybase, entre outros.
* Grande comunidade e Suporte: PHP possui uma vasta comunidade de desenvolvedores ao redor do mundo, ou seja, há uma abundância de recursos, tutoriais e bibliotecas disponíveis.
</details>

 <h2> 🩻 Montando os códigos </h2>
 
<h3> Código JavaScript</h3>

[![Código js](https://img.shields.io/badge/Código_js-D1E9F6?style=for-the-badge&logo=github&logoColor=FF8A8A)](https://github.com/S5-2024/lista-01-udwmj-2024/tree/main/JS)

 <h4> Uma breve explicação do web site e do código: </h4>

 <p>
   A ideia deste script é mudar a tela do site de dark mode para light mode, e junto a isso aparecerá um gatinho dormindo e dançando, respectivamente. 
 </p> <br>
 

```javascript
 document.addEventListener('DOMContentLoaded', () => {});

``` 
 <p> 
   
Esse método "escuta" o que está acontecendo na sua Web page, e quando um determinado evento é disparado, ele executará a função que foi associada. No caso aqui, o evento  `` DOMContentLoaded `` é acionado quando todo o HTML foi completamente carregado e analisado. Isso garante que o código dentro da função só seja executado após o carregamento completo da estrutura HTML da página.
 </p>

<br> 

```javascript
 document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleButton');
  const imageLight = document.getElementById('toggleImage');
  const imageDark = document.getElementById('toggleImageDark');
});
```

<p> 
  
Aqui estão as seleções de elementos do HTML com os IDs:
  * Seleciona o elemento com a ID `toggleButton`  e armazena na constante `button`. Este elemento será o botão que o usuário clicará para alternar entre os modos.
  * Seleciona o elemento HTML com o ID `toggleImage` e o armazena na constante `imageLight`. Este é o elemento da imagem que deve ser exibido no modo claro.
  * Seleciona o elemento HTML com o ID `toggleImageDark` e o armazena na constante `imageDark`. Este é o elemento da imagem que deve ser exibido no modo escuro.
</p>

<br> 

```javascript
 button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
```
<p>

O `button.addEventListener('click', () =>` está escutando quando o `button` foi clicado, e irá executar:
* `document.body.classList.toggle('dark-mode');` Altera a classe `dark-mode`, ou seja, se ela estiver rpesente ela será removida, se não estiver disponível será adicionada. O mesmo vale para o `document.body.classList.toggle('light-mode');`
</p>
<br>

```javascript
   if (document.body.classList.contains('dark-mode')) {
          imageLight.classList.add('hidden');
          imageDark.classList.remove('hidden');
      } else {
          imageLight.classList.remove('hidden');
          imageDark.classList.add('hidden');
      }
```

<p>

Aqui faz um condicionamento, se o `body` estiver no `darkmode` irá esconder a imagem exibida no modo claro adicionando a classe `hidden` a imagem com: `imageLight.classList.add('hidden');`, e exibirá a imagem que deve ser exibida no darkmode com: 
`imageDark.classList.remove('hidden');`  removendo a característica `hidden`. 
O `else` faz a mesma coisa, mas ao contrário. 
</p>

---

<h3> Código PHP</h3>

 [![código php](https://img.shields.io/badge/código_php-FF9EAA?style=for-the-badge&logo=github&logoColor=3AA6B9)](https://github.com/S5-2024/lista-01-udwmj-2024/blob/main/PHP/index.php)
 
 <h4> Uma breve do código: </h4>


 <p>
   A ideia deste script é apenas exibir a data e a hora atual. 
 </p> <br>


```php
  <?php 
    date_default_timezone_set("America/Sao_Paulo");  //GMT-3
    echo "Hoje é dia " . date("d/M/Y");
    echo " e a hora atual é: " . date("G:i");
    ?>
```

<p> 

O `date_default_timezone_set("America/Sao_Paulo");`  está setando o local que deverá usar como base para exibir a data e a hora.
E o `echo "Hoje é dia " . date("d/M/Y");` printa na tela da web page o dia, e o próximo echo exibe o horário atual. 
Vale lembrar que esse script está dentro de uma estrutura em HTML


</p>


<div align=center width=100% height=100%> 

<img src="https://github.com/S5-2024/lista-01-udwmj-2024/blob/main/assets/banners.gif"> </div>

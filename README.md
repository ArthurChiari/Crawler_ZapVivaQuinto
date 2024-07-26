# Crawler_ZapVivaQuinto
 
## **Funcionalidades**
- **Web Crawling**: Coleta automatizada de dados de listagens de imóveis dos sites **Zap Imóveis**, **Viva Real** e **Quinto Andar**.
- **Análise de Dados**: Utilização de algoritmos de **IA** para análise de preços, localização, tendências de mercado e outras métricas relevantes.
- **Dashboard Interativo**: Visualização dos dados coletados e analisados em um dashboard intuitivo e de fácil navegação. 

## **Tecnologias Utilizadas**
- **Linguagens de Programação**: **Python**
- **Bibliotecas**:  
  - **BeautifulSoup** para parsing de HTML
  - **urllib** para requisições HTTP
  - **pandas** para manipulação e análise de dados
  - **selenium** para automação de navegação web
  - **webdriver-manager** para gerenciamento de drivers do Selenium
- **Inteligência Artificial**: Algoritmos de **machine learning** para análise de dados
- **Visualização de Dados**: **Dashboards interativos** para apresentação dos resultados

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/Crawler_ZapVivaQuinto.git

2. **Instale as dependências**:
   ```bash
   pip install -r requirements.txt

## **Uso**

1. **Configure as URLs de origem dos dados nos scripts de crawler**:
   - Abra os arquivos **Jupyter Notebooks** e scripts **JavaScript** indicados e configure as URLs das páginas de imóveis que deseja rastrear.

2. **Execute os scripts de coleta de dados**:
   - Execute os notebooks e scripts a seguir para coletar dados de imóveis:
     ```bash
     jupyter notebook crawler_zap.ipynb
     jupyter notebook crawler_viva.ipynb
     jupyter notebook crawler_viva_cob.ipynb
     node aps.js
     node aps_cob.js
     ```

3. **Execute os scripts de tratamento e limpeza dos dados**:
   - Após coletar os dados, execute os notebooks abaixo para realizar a limpeza e o tratamento dos dados:
     ```bash
     jupyter notebook zap.ipynb
     jupyter notebook viva.ipynb
     jupyter notebook quinto.ipynb
     ```

4. **Execute o script de junção dos dados**:
   - Combine os dados tratados em um único conjunto de dados executando o seguinte notebook:
     ```bash
     jupyter notebook all_ap.ipynb
     ```

5. **Execute o script para ciência de dados**:
   - Por fim, utilize os dados combinados para realizar análises de ciência de dados executando o notebook:
     ```bash
     jupyter notebook CienciaDados.ipynb
     ``` 

## **Contribuição**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

Create: 06/06/2024 às 10:45

### **O que são?**

São **regras** impostas em um negócio, projeto e empresas de acordo com as necessidades de cada. Elas tem validações, restrições e etc, permitindo que o desenvolvimento, produto e negócio de uma empresa cresçam da melhor forma.  É comum que partes do negócio possuam regras claras, como por exemplo, **controle de acesso**, **cálculos** e **valores e políticas internas do produto**, especialmente quando há legislação envolvida, como um cálculo de valor de imposto sobre um produto.

Uma regra, por definição, deve ser sucinta, direta e compreensível, lidando apenas com um aspecto ou atividade do negócio e definindo procedimentos para cada um desses aspectos ou atividades. Exemplo, um programa como uma série de decisões feitas através de código, a atividade de um negócio também pode ser pensada da mesma forma:
- Um usuário poderá finalizar um cadastro com sucesso **somente** se todos os dados solicitados nos campos do cadastro forem inseridos com sucesso e validados.

Na afirmação acima é possível identificar dois pontos:
1. Uma _condição_: se os dados forem validados com sucesso (ou seja, uma das situações possíveis);
2. Uma _ação_: o cadastro é finalizado com sucesso (a ação que deverá ser tomada a partir da situação).

Temos que mapear todas as situações possíveis, e se nós não colocarmos os dados corretos? ou seja, mesmo em uma situação simples como um **cadastro de usuário**, pode resultar em múltiplas regras de negócio, uma para cada fator que pode influenciar o resultado final da ação:
- O endereço foi validado?
- O produto tem alguma restrição de endereço (por exemplo, limite de área de entrega)?
- O cadastro envolve dados de cartão de crédito?
- O número do cartão será validado por algoritmo próprio antes do envio do formulário?

### **Regras e requisitos**

As regras de negócio e os requisitos de um projeto ou de uma funcionalidade, normalmente estão ligadas, mas cada uma tem funções diferentes no desenvolvimento de um produto:
- As regras de negócio descrevem **como** se espera que o produto se comporte: condições, restrições, gatilhos, etc. Podem ser definidas por stakeholders em conjunto com pessoas de produto (como PMs) e com lideranças técnicas;
- Já os requisitos são o conjunto de “partes funcionais” que documentam **o que** o sistema deve fazer: quais as necessidades que deverão ser atendidas. Podem ser definidos pela liderança técnica em conjunto com o time de desenvolvimento e incluir detalhamento técnico, _DoD_ (_definition of done_), _DoR_ (_definition of ready_) e _critérios de aceitação_.

Por exemplo:
- Regra: O usuário somente deve conseguir completar o cadastro de tiver fornecido um número de cartão de crédito válido (condição: "somente", "se", etc)
- Requisito: Validar o número de cartão de crédito em todas as operações de criação de usuário (ação objetiva do que o sistema deve fazer)

### **Como as regras são escritas**

A plataforma que as regras serão escritas podem varias, porém algumas características são sempre as mesmas:
- Ter somente uma função (fazer somente uma coisa);
- Ser completa (ter início, meio e fim definidos de forma explícita);
- Ser inteligível, sucinta e clara para todas as pessoas envolvidas;
- Especificar claramente qualquer regra de compliance que seja aplicável;
- Estar sempre atualizada.




## **Referências**
- https://www.alura.com.br/artigos/o-que-sao-regras-de-negocio#definindo-%E2%80%9Cregra-de-negocio%E2%80%9D (é bom eu sempre ler)
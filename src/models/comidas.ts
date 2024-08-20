type tipo = 'lanche' | 'prato' | 'pizza'

type comidas = {
    tipo: tipo
    imagem: string,
    nome: string,
    preco: number
}

const dataComidas: comidas[] = [
    {
        tipo: 'lanche',
        imagem: 'x-tudo.jpg',
        nome: 'x-tudo',
        preco: 19.90,
    },

    {
        tipo: 'lanche',
        imagem: 'x-egg.jpg',
        nome: 'x-egg',
        preco: 9.90,
    },

    {
        tipo: 'lanche',
        imagem: 'hotdog.jpg',
        nome: 'cachorro quente',
        preco: 6.90,
    },

    {
        tipo: 'lanche',
        imagem: 'sanduiche-fit.jpg',
        nome: 'sanduiche fit',
        preco: 8.90,
    },

    {
        tipo: 'lanche',
        imagem: 'batata-frita.jpg',
        nome: 'batata frita M',
        preco: 11.90,
    },

    {
        tipo: 'lanche',
        imagem: 'batata-frita.jpg',
        nome: 'batata frita G',
        preco: 15.90,
    },

    {
        tipo: 'prato',
        imagem: 'panqueca.jpg',
        nome: 'panqueca com batata frita e salpicão',
        preco: 18.90,
    },

    {
        tipo: 'prato',
        imagem: 'escondidinho.jpg',
        nome: 'escondidinho de carne co queijo',
        preco: 25.90,
    },

    {
        tipo: 'prato',
        imagem: 'sopa-salada.jpg',
        nome: 'sopa de salada',
        preco: 13.90,
    },

    {
        tipo: 'prato',
        imagem: 'baiao.jpg',
        nome: 'porção baião com 2 espetinhos de carne',
        preco: 16.90,
    },

    {
        tipo: 'prato',
        imagem: 'sopa-costela.jpg',
        nome: 'porção sopa de costela',
        preco: 10.00,
    },

    {
        tipo: 'pizza',
        imagem: 'pizza.jpg',
        nome: 'pizza de calabresa com quatro queijos',
        preco: 39.90,
    },

    {
        tipo: 'pizza',
        imagem: 'pizza.jpg',
        nome: 'pizza de carne de sol na nata',
        preco: 42.90,
    },

    {
        tipo: 'pizza',
        imagem: 'pizza.jpg',
        nome: 'pizza de frango catupiry',
        preco: 35.90,
    },

    {
        tipo: 'pizza',
        imagem: 'pizza.jpg',
        nome: 'pizza doce de chocolate com brigadeiro',
        preco: 42.90,
    },
]

export const comidas = {
    pegarTodas: (): comidas[] => {
        return dataComidas;
    },
    filtrarPorTipo: (type: tipo): comidas[] => {
        return dataComidas.filter(item => {
            return (item.tipo === type)
        })
    },
    filtrarPorNome: (nome: string): comidas[] => {
        return dataComidas.filter(item => {
            return item.nome.toLocaleLowerCase().indexOf(nome.toLocaleLowerCase()) > -1
        })
    },
}
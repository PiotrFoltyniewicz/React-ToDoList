import React, { useState } from "react";

export default function Quote(){

    const quotes =[
        '"Cierpliwość, wytrwałość i pot tworzą niepokonaną kombinację sukcesu." - Napoleon Bonaparte',
        '"Nie ma takiej rzeczy, której nie można by osiągnąć pracą. Nic nie leży poza jej zasięgiem. Złe obyczaje przemienia w dobre, niszczy złe zasady, a odradza dobre. Jest w stanie uczynić z człowieka anioła." - Mark Twain',
        '"Nie sama praca, ale jej cel sprawia, że to jest coś wyjątkowego." - William Paul Young',
        '"Zazwyczaj mamy dość czasu, jeżeli potrafimy wykorzystać go właściwie." - Johann Wolfgang von Goethe',
        '"Lepiej zużywać się niż rdzewieć." - Denis Diderot',
        '"Praca uszlachetnia. To nie slogan. To prawda. Bo czujesz, że możesz, że umiesz, że jesteś czegoś wart, że warto było się uczyć, że życie jest piękne." - Iwona Banach',
        '"Sposobem na zaczęcie jest skończenie mówienia i podjęcie działania." - Walt Disney'
    ];

    function randomQuote()
    {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    return (
        <p className='Quote'>{randomQuote()}</p>
    );
}
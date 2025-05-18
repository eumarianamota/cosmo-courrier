[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![npm](https://img.shields.io/npm/v/nome-do-pacote) ![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
# ✨ Cosmo courrier
O projeto "cosmo-courrier" simula um sistema de entregas espaciais interestelares. O sistema verifica a lógica das entregas de acordo com a distância dos planetas, o peso da carga, o consumo do combustível e limitações ambientais.

## 👩‍💻 Algoritmos Implementados
- Gerencia as naves, destinos e cargas
- Verifica a compatibilidade da carga com a nave
- Verifica a viabilidade da missão (entrega)
- Exibe as missões

## 📩 Como Executar 
```bash
git clone https://github.com/eumarianamota/cosmo-courrier

cd cosmo-courrier
```
## 💻 Tecnologias Utilizadas
![npm](https://img.shields.io/npm/v/nome-do-pacote) ![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)

### 📲 Como Instalar
#### Node.js
```bash
Acesse: https://nodejs.org 
Baixe e instale o instalador conforme seu sistema (O npm já vem instalado junto ao Node).
```
#### Verificar se o sistema foi instalado
```bash
node -v
npm -v
```
#### Typescript
```bash
npm install --save-dev typescript
```
#### Verificar se o sistema foi instalado
```bash
tsc --version
```

## ↘ Exemplo de Entrada
```bash
const teste1 = new Mission
console.log(teste1.ShowMission())
```

## ↙ Exemplo de Saída
```bash
Assigned spacecraft: Light Ship | Fuel: 75000 | Capacity: 50KG
Light Ship delivered "Communication Modules" to Corrosive
```
#### ou
```bash
MISSION: FAST SHIP -> ROCKY
Assigned spacecraft: Fast Ship | Fuel: 112500 | Capacity: 75KG
Fast Ship failed to deliver "Supplies(250KG)": exceeds capacity
```

## 🧾 Licença
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### 👥 Contribuintes 
- [@eumarianamota](https://github.com/eumarianamota) 
- [@khrisla](https://github.com/khrisla)
- [@wilkneves](https://github.com/wilkneves)    
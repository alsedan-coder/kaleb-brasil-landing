# Kaleb Brasil - Landing Page (Next.js)

## 🚀 Setup Rápido

### 1. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 2. Rodar Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Build para Produção

```bash
npm run build
npm start
```

---

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── layout.tsx          # Layout raiz com Tailwind
│   ├── page.tsx            # Home com Hero e Pulse Beams
│   └── globals.css         # Estilos globais
├── components/
│   └── pulse-beams.tsx     # Componente com Framer Motion
├── package.json            # Dependências
├── tailwind.config.js      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── next.config.js          # Configuração Next.js
```

---

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - React framework moderno com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animações fluidas
- **Roboto + Inter** - Google Fonts

---

## 🎯 Componentes Principais

### PulseBeams
Componente de animação SVG com Framer Motion para efeito visual nos CTAs.

**Props:**
- `children` - Conteúdo dentro do container
- `className` - Classes Tailwind adicionais
- `beams` - Array com paths dos beams (opcional)

**Exemplo:**
```tsx
<PulseBeams>
  <button>Clique aqui</button>
</PulseBeams>
```

---

## 🎨 Cores Tailwind

Variáveis customizadas em `tailwind.config.js`:

```js
colors: {
  navy: '#0D2145',
  blue: '#1658B8',
  'blue-light': '#2472E8',
  accent: '#E67E22',        // Laranja Kaleb
  'off-white': '#F5F7FC',
  ...
}
```

Use diretamente no Tailwind:
```tsx
<div className="bg-navy text-accent">
```

---

## 📝 Próximos Passos

1. **Adicionar mais seções** - Crie componentes React para:
   - Problems section
   - About section  
   - Services section
   - Testimonials
   - Contact form
   - Footer

2. **Otimizações de imagem** - Use Next.js Image component:
   ```tsx
   import Image from 'next/image';
   <Image src="..." alt="..." width={} height={} />
   ```

3. **Meta tags e SEO** - Use Next.js Metadata API no `layout.tsx`

4. **Deploy** - Faça deploy em:
   - Vercel (recomendado para Next.js)
   - Netlify
   - AWS/Google Cloud

---

## ⚡ Dicas de Performance

- Componentes marcar com `'use client'` apenas onde necessário
- Use `React.memo()` para componentes que não mudam
- Lazy load imagens pesadas
- Optimize fonts com `next/font`

---

## 🤝 Suporte

Para mais informações:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Desenvolvido com ❤️ para Kaleb Brasil**

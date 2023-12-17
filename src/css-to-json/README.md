tailwindcss에서 플러그인을 만들때

```ts
addUtilities({
  '.test': {
    'font-size': '48px',
    'font-weight': '800',
    'letter-spacing': '-0.48px',
  }
})
```

이렇게 만들기 너무 힘들었다.

리소스를 제공해주는 쪽에서는

```css
.test {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.48px;
}
```

이렇게 주니까!

```ts
addUtilities({
  '.test': css2json(`
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.48px;
  `)
})
```

이제 이렇게 써주면된다.
## Convensões de arquitetura:

- Os componentes devem seguir o padrão de arquitetura de composição;
- Sua definição e a definição de seus métodos deve ser feita usando const;
- Os componentes devem ser exportados como default;
- Os nomes de arquivo devem seguir o padrão kebab-case;
- A nomeação da tipagem das propriedades, a menos que necessite de uma exportação, deve se chamar apenas `Props`;

1. **Páginas e seus componentes:**
    - Todas as páginas e componentes devem ser criados na pasta `src/app`.
    - Seus componentes únicos, aqueles que não são reutilizados em outras páginas, devem ser criados em uma pasta chamada `components` dentro da pasta da página.
2. **Schemas:**
    - Todos os schemas devem ser criados na pasta `src/schemas`.
    - O padrão de nomeação deve ser camelCase;
    - O padrão do nome de arquivo deve ser `{name}.schema.ts`, kebab-case;
    - O schema deve ser exportado como named export;
    - O schema deve exportar um tipo inferido pelo zod, com o padrão de nomes `{name}Values`;
    - O schema de formulário deve seguir o padrão de nomeação `{name}-form.schema.ts`, kebab-case;
    - O schema de formulário deve exportar um tipo inferido pelo zod, com o padrão de nomes `{name}FormValues`;
3. **Hooks e formularios:**
    - Os hooks devem ser criados na pasta `src/hooks`;
    - O padrão de nomeação deve ser camelCase;
    - O padrão do nome de arquivo deve ser `{name}.hook.ts`, kebab-case;
    - O hook deve ser exportado como named export;
    - Os hooks de formulários devem estar na pasta `src/hooks/forms`;
    - O padrão para hooks de formulários deve ser `{name}-form.hook.ts`, kebab-case;
    - Os hooks de formulários devem exportar um tipo inferido pelo zod, com o padrão de nomes `{name}FormValues`;
4. **Services:**
    - Os services devem ser criados na pasta `src/services`;
    - O padrão de nomeação deve ser camelCase;
    - O padrão do nome de arquivo deve ser `{name}.service.ts`, kebab-case;
    - O service deve ser exportado como named export;
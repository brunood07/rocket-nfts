import { ColumnContainer, Link, Title } from "./styles";

interface ColumnLinks {
  title: string;
  links: {
    id: string;
    displayName: string;
    href: string;
  }[];
}

export function ColumnLinks(props: ColumnLinks) {
  const { links, title } = props;

  return (
    <ColumnContainer>
      <Title>{title}</Title>
      {links.map((item) => {
        return (
          <Link key={item.id} href={item.href}>
            {item.displayName}
          </Link>
        );
      })}
    </ColumnContainer>
  );
}

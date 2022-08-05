interface Item {
  id: number;
}

interface Data<T> {
  items: T[];
}

export default function Generic<T extends Item>({ items }: Data<T>) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}

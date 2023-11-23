type Props = {
  params: {
    slug: string;
  };
};

export default function pants({ params }: Props) {
  return <div>{params.slug} 제품 페이집입니다.</div>;
}

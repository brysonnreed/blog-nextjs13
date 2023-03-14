import Image from "next/image";

Image;

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2 ">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://cdn.sanity.io/images/bvtdyxpf/production/02d13d9a0dd880e085138166ff05544b47a7524e-1080x1080.png?w=2000&fit=max&auto=format"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;

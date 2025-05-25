type Props = { children: string };

const SidebarCategory = ({ children }: Props) => {
  return (
    <h3 className="text-xs uppercase text-primary-lowmedium font-medium ml-5 mb-2">
      {children}
    </h3>
  );
};

export default SidebarCategory;

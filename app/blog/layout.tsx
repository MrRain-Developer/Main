export default function Blog({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="">
       
   
        {children}
      </section>
    )
  }
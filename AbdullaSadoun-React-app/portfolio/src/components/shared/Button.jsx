const Button = ({ children, href, variant = 'primary', size = 'default', className = '', ...props }) => {
  const baseStyles = "font-medium transition-all duration-200 inline-block"
  
  const variants = {
    primary: "bg-white hover:bg-[#e6e6e6] text-black",
    secondary: "bg-secondary hover:bg-secondary/90 text-text",
    outline: "border border-white/20 hover:bg-white/10",
    hero: "bg-white hover:bg-[#e6e6e6] text-black border border-white/20"
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    large: "px-8 py-4 text-lg"
  }

  const Component = href ? 'a' : 'button'
  
  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} rounded-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button 
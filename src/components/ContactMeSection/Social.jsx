const Social = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl h-11 w-11 border border-emerald-200 text-emerald-700 rounded-xl flex items-center justify-center hover:bg-emerald-50 transition-colors duration-300"
    >
      <Icon />
    </a>
  )
}

export default Social

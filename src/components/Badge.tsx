interface BadgeProps {
  text: string
  size?: string
  icon?: string
}

export const Badge = ({text, size = "small", icon}: BadgeProps) => {

  return (
    <button className={`badge ${size === "small" ? "badge-small" : "badge-medium"}`}>
      {`${icon ? icon : ""} ${text}`}
    </button>
  )
}
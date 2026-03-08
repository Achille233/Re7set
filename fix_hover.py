import re

content = open("src/components/sections/Piliers.jsx").read()

# Replace hover: with [&.is-active]: in the main pilier-card div definition
content = content.replace(
    'transition-all duration-500 hover:border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] relative',
    'transition-all duration-500 [&.is-active]:border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] [&.is-active]:shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] relative'
)

# And replace group-hover with group-[.is-active] only from index 3000 onwards roughly or everywhere since we only want the visual effects
content = content.replace("group-hover:", "group-[.is-active]:")

open("src/components/sections/Piliers.jsx", "w").write(content)

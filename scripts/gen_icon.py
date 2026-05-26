"""Gera o ícone da marca (monograma A&B) em PNG e favicon.ico multi-resolução.

Uso: python3 scripts/gen_icon.py
"""
from PIL import Image, ImageDraw, ImageFont

NAVY = (13, 43, 92)     # #0D2B5C
SKY = (46, 134, 171)    # #2E86AB
TEAL = (27, 153, 139)   # #1B998B
WHITE = (255, 255, 255)

S = 512  # mestre em alta resolução
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def vertical_gradient(size, top, bottom):
    base = Image.new("RGB", (size, size), top)
    top_img = Image.new("RGB", (size, size), bottom)
    mask = Image.new("L", (size, size))
    md = mask.load()
    for y in range(size):
        for x in range(size):
            md[x, y] = int(255 * y / size)
    base.paste(top_img, (0, 0), mask)
    return base


def rounded_mask(size, radius):
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return m


def make_master():
    grad = vertical_gradient(S, NAVY, SKY)
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    img.paste(grad, (0, 0), rounded_mask(S, int(S * 0.22)))

    draw = ImageDraw.Draw(img)
    text = "A&B"
    # acha o maior tamanho de fonte que cabe com margem
    size = S
    while size > 10:
        font = ImageFont.truetype(FONT_BOLD, size)
        box = draw.textbbox((0, 0), text, font=font)
        w, h = box[2] - box[0], box[3] - box[1]
        if w <= S * 0.74 and h <= S * 0.74:
            break
        size -= 4

    box = draw.textbbox((0, 0), text, font=font)
    w, h = box[2] - box[0], box[3] - box[1]
    x = (S - w) / 2 - box[0]
    y = (S - h) / 2 - box[1]
    draw.text((x, y), text, font=font, fill=WHITE)
    return img


def main():
    master = make_master()

    # PNG de alta resolução para logo (JSON-LD) e rel=icon
    master.save("public/logo.png")
    master.save("src/app/icon.png")

    # apple touch icon (fundo opaco, sem transparência)
    apple = Image.new("RGB", (S, S), NAVY)
    apple.paste(master, (0, 0), master)
    apple.resize((180, 180), Image.LANCZOS).save("src/app/apple-icon.png")

    # favicon.ico multi-resolução (inclui 48px, mínimo do Google)
    master.save(
        "src/app/favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )
    print("OK: logo.png, icon.png, apple-icon.png, favicon.ico gerados")


if __name__ == "__main__":
    main()

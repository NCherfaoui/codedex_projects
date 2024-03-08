import imageio.v3 as iio
filenames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
images = [ ]
for filename in filenames:
  images.append(iio.imread(filename))
iio.imwrite('discord.gif', images, duration = 500, loop = 0)


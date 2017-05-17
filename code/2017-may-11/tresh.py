from javax.imageio import ImageIO
from java.io import File
from nodebox.graphics import Point
from math import sqrt
import os
from os.path import abspath

def cook(foto, sg):
    f = File(abspath(foto))
    bi = ImageIO.read(f)
    raster = bi.raster
    w = raster.width
    h = raster.height
    seg = sg
    all = []
    for i in xrange(0,w,seg):
        for j in xrange(0,h,seg):
            c = bi.raster.getPixel(i,j,[0.0,0.0,0.0])
            all.append(Point(i,j))
            all.append(c[0])
    return all

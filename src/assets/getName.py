from os import listdir
from os.path import isfile, join
import re
mypath = './'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

for file in onlyfiles:
    match = re.search('Rank=(.+?), Suit=(.+?).png', file)
    # x = re.findall("\Rank=(), Suit=s+.*\\",file)
    if match:
        # print(f"Rank = {match.group(1)} Suit = {match.group(2)}")
        print("{{rank: {0},suit: '{1}', image: {1}{0} }},".format(
            match.group(1), match.group(2), file))
        # print("import {1}{0} from '../../assets/{2}'".format(
        #     match.group(1), match.group(2), file))

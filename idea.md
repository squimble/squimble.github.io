Xfind- software to find objects that fit into a certain range of RA+dec values from large tables, and to lookup and query databases for magnitudes (JHK (2MASS), W1,W2 (WISE), SDSS). 

-input star/table of stars from SIMBAD ADQL TAP
-lookup on NED, SIMBAD, HORIZONS
-automatic input of coordinates
-sky map plot via TOPCAT of targets (requires TOPCAT + JRE)
-checked against inputed RA+dec limits, or preset lookup limits from Gemini or W.M. Keck
-table can be shown of target
-in GUI it shows if each star is visible in those RA+dec limits
-also can filter by if visible or not
-query can be made to various databases to get data like magnitudes or coordinates (degrees/DHMS)
-telluric stars can be found for the targets
-also can filter by whether the target has a telluric
-table can be exported of all targets that are visible.
-written in python
windows + linux release
quick setup (Windows .exe (potentially bundled with TOPCAT), Linux tar.gz or .deb for Ubuntu ( potential .sh launcher, bundeled with TOPCAT))
ease of use (plug in table and limits, return capable targets (w or w/o telluric), query for data using IRSA (caltech ) or direct 2MASS or WISE query, set limits from gemini or wmkeck or similar observatories)

packages
qt designer (pyside6)
astropy (handling simbad/ned/horizons/irsa (2mass and wise) & hipparcos)
(package to handle csv) polars or pandas
subprocess (TOPCAT handler)





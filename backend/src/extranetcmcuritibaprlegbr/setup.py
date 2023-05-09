"""Installer for the extranetcmcuritibaprlegbr package."""
from pathlib import Path
from setuptools import find_packages
from setuptools import setup


long_description = f"""
{Path("README.md").read_text()}\n
{Path("CONTRIBUTORS.md").read_text()}\n
{Path("CHANGES.md").read_text()}\n
"""


setup(
    name="extranetcmcuritibaprlegbr",
    version="1.0.0a1",
    description="Extranet CMCuritiba configuration package.",
    long_description=long_description,
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: Addon",
        "Framework :: Plone :: 6.0",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
    keywords="Python Plone CMS",
    author="Ramiro Batista da Luz",
    author_email="ramiroluz@gmail.com",
    url="https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br",
    project_urls={
        "PyPI": "https://pypi.python.org/pypi/extranetcmcuritibaprlegbr",
        "Source": "https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br",
        "Tracker": "https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br/issues",
    },
    license="GPL version 2",
    packages=find_packages("src", exclude=["ez_setup"]),
    package_dir={"": "src"},
    include_package_data=True,
    zip_safe=False,
    python_requires=">=3.8",
    install_requires=[
        "setuptools",
        "Plone",
        "prettyconf",
        "plone.api",
    ],
    extras_require={
        "test": [
            "parameterized",
            "zest.releaser[recommended]",
            "plone.app.testing[robot]>=7.0.0a3",
            "plone.restapi[test]",
            "collective.MockMailHost",
        ],
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    [console_scripts]
    update_locale = extranetcmcuritibaprlegbr.locales.update:update_locale
    """,
)

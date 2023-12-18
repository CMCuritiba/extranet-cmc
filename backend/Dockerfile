# syntax=docker/dockerfile:1
ARG PLONE_VERSION=6.0.8
FROM plone/server-builder:${PLONE_VERSION} as builder

WORKDIR /app

# Add local code
COPY . .

# Install local requirements and pre-compile mo files
RUN <<EOT
    set -e
    bin/pip install mxdev
    mv requirements-docker.txt requirements.txt
    sed -i 's/-e src\/extranet_cmc\[test\]/src\/extranet_cmc/g' mx.ini
    bin/mxdev -c mx.ini
    bin/pip install -r requirements-mxdev.txt
    bin/python /compile_mo.py
    rm -Rf src/
EOT

FROM plone/server-prod-config:${PLONE_VERSION}

LABEL maintainer="DTIC CMCuritiba <dtic@curitiba.pr.leg.br>" \
      org.label-schema.name="extranet-cmc-backend" \
      org.label-schema.description="Extranet CMCuritiba backend image." \
      org.label-schema.vendor="DTIC CMCuritiba"

# Copy /app from builder
COPY --from=builder /app /app

RUN <<EOT
    set -e
    ln -s /data /app/var
EOT

# syntax=docker/dockerfile:1
ARG PLONE_VERSION=6.0.4
FROM plone/server-builder:${PLONE_VERSION} as builder

WORKDIR /app

# Add local code
COPY . .

# Install local requirements and pre-compile mo files
RUN <<EOT
    bin/pip install mxdev
    mv requirements-docker.txt requirements.txt
    bin/mxdev -c mx.ini
    bin/pip install -r requirements-mxdev.txt
    bin/python /compile_mo.py
    rm -Rf src/
EOT

FROM plone/server-prod-config:${PLONE_VERSION}

LABEL maintainer="Ramiro Batista da Luz <ramiroluz@gmail.com>" \
      org.label-schema.name="extranet.cmcuritiba.pr.leg.br-backend" \
      org.label-schema.description="Extranet CMCuritiba backend image." \
      org.label-schema.vendor="Ramiro Batista da Luz"

# Copy /app from builder
COPY --from=builder /app /app

RUN <<EOT
    ln -s /data /app/var
EOT
